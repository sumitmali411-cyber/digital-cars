/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// .env.local takes precedence; dotenv never overwrites an already-set value.
dotenv.config({ path: path.resolve(__dirname, '..', '.env.local') });
dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

const PORT = Number(process.env.PORT) || 8080;
const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  console.error(
    'GEMINI_API_KEY is not set. Create a .env.local with GEMINI_API_KEY=<your key> before starting the server.',
  );
  process.exit(1);
}

// The key lives only in this process. It is never sent to the browser.
const ai = new GoogleGenAI({ apiKey: API_KEY });

/** Upper bound on the caller-supplied fields, in characters. */
const MAX_FIELD_CHARS = 120;

/** Rate limit: requests allowed per client per window. */
const RATE_LIMIT_MAX = 60;
const RATE_LIMIT_WINDOW_MS = 60_000;

const app = express();

app.disable('x-powered-by');

const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "script-src 'self'",
  // Tailwind and the animation library write inline style attributes.
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "media-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  // three.js / react-three-fiber compile shaders in workers from blob URLs.
  "worker-src 'self' blob:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join('; ');

app.use((_req, res, next) => {
  res.setHeader('Content-Security-Policy', CONTENT_SECURITY_POLICY);
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'no-referrer');
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Resource-Policy', 'same-origin');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  res.setHeader(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  );
  next();
});

// Reject oversized bodies before they are buffered into memory.
app.use(express.json({ limit: '16kb' }));

const hits = new Map<string, { count: number; resetAt: number }>();

function rateLimited(key: string): boolean {
  const now = Date.now();
  const entry = hits.get(key);

  if (!entry || now >= entry.resetAt) {
    hits.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

// Drop expired buckets so the map cannot grow without bound.
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of hits) {
    if (now >= entry.resetAt) hits.delete(key);
  }
}, RATE_LIMIT_WINDOW_MS).unref();

function isValidField(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0 && value.length <= MAX_FIELD_CHARS;
}

app.post('/api/insight', async (req, res) => {
  if (rateLimited(req.ip ?? 'unknown')) {
    return res.status(429).json({ error: 'Too many requests. Please slow down.' });
  }

  const { carName, carYear, manufacturer } = req.body ?? {};

  // The prompt is assembled here from validated fields rather than accepted
  // whole from the client, so this endpoint cannot be used as a free
  // general-purpose proxy to the model.
  if (!isValidField(carName) || !isValidField(manufacturer)) {
    return res.status(400).json({ error: 'carName and manufacturer are required.' });
  }

  const year = Number(carYear);
  if (!Number.isInteger(year) || year < 1800 || year > 2200) {
    return res.status(400).json({ error: 'carYear must be a plausible year.' });
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `As a museum curator, provide a 2-sentence fascinating historical insight or "Curator's Note" about the ${year} ${manufacturer} ${carName}. Focus on its cultural impact or engineering significance.`,
    });
    return res.json({ insight: response.text || '' });
  } catch (error) {
    // Log server-side; return a generic message so upstream errors never
    // reach the browser.
    console.error('Insight generation failed:', error);
    return res.status(502).json({ error: 'Failed to generate insight.' });
  }
});

// Serve the production build. In development Vite serves the client and
// proxies /api to this process.
const distDir = path.resolve(__dirname, '..', 'dist');
app.use(express.static(distDir));
app.get(/^(?!\/api\/).*/, (_req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Digital Cars API listening on http://localhost:${PORT}`);
});
