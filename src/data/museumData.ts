import { Car, Manufacturer, Country } from '../types';

export const countries: Country[] = [
  {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    description: 'The birthplace of the modern automobile, known for precision engineering and luxury performance.'
  },
  {
    id: 'italy',
    name: 'Italy',
    flag: '🇮🇹',
    description: 'Synonymous with passion, exotic design, and racing heritage.'
  },
  {
    id: 'japan',
    name: 'Japan',
    flag: '🇯🇵',
    description: 'Pioneers of reliability, efficiency, and cutting-edge technology.'
  },
  {
    id: 'usa',
    name: 'USA',
    flag: '🇺🇸',
    description: 'Home of the muscle car and the spirit of the open road.'
  }
];

export const manufacturers: Manufacturer[] = [
  {
    id: 'porsche',
    name: 'Porsche',
    countryId: 'germany',
    logo: 'https://logo.clearbit.com/porsche.com',
    history: 'Founded in 1931 by Ferdinand Porsche, the company initially offered motor vehicle development work and consulting.'
  },
  {
    id: 'ferrari',
    name: 'Ferrari',
    countryId: 'italy',
    logo: 'https://logo.clearbit.com/ferrari.com',
    history: 'Founded by Enzo Ferrari in 1939 out of Alfa Romeo\'s race division as Auto Avio Costruzioni.'
  },
  {
    id: 'toyota',
    name: 'Toyota',
    countryId: 'japan',
    logo: 'https://logo.clearbit.com/toyota.com',
    history: 'Started as a division of Toyoda Automatic Loom Works, Toyota has grown into one of the largest automakers in the world.'
  },
  {
    id: 'tesla',
    name: 'Tesla',
    countryId: 'usa',
    logo: 'https://logo.clearbit.com/tesla.com',
    history: 'Founded in 2003, Tesla is an American electric vehicle and clean energy company based in Austin, Texas.'
  }
];

export const cars: Car[] = [
  {
    id: 'porsche-911',
    name: '911 Carrera S',
    year: 2023,
    manufacturerId: 'porsche',
    countryId: 'germany',
    description: 'The definitive sports car. A timeless design combined with modern performance.',
    specs: {
      engine: '3.0L Twin-Turbo Flat-6',
      power: '443 hp',
      topSpeed: '191 mph',
      zeroToSixty: '3.5s'
    },
    modelUrl: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/porsche-911-991/model.gltf',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ferrari-458',
    name: '458 Italia',
    year: 2015,
    manufacturerId: 'ferrari',
    countryId: 'italy',
    description: 'A masterpiece of Italian engineering, featuring a naturally aspirated V8 that sings.',
    specs: {
      engine: '4.5L V8',
      power: '562 hp',
      topSpeed: '202 mph',
      zeroToSixty: '3.4s'
    },
    modelUrl: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/ferrari-458/model.gltf',
    image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'tesla-model-3',
    name: 'Model 3 Performance',
    year: 2024,
    manufacturerId: 'tesla',
    countryId: 'usa',
    description: 'The electric car that changed everything. Minimalist design with supercar acceleration.',
    specs: {
      engine: 'Dual Motor AWD',
      power: '510 hp',
      topSpeed: '163 mph',
      zeroToSixty: '2.9s'
    },
    modelUrl: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tesla-model-3/model.gltf',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'toyota-supra',
    name: 'GR Supra',
    year: 2022,
    manufacturerId: 'toyota',
    countryId: 'japan',
    description: 'A legend reborn. The Supra returns with a perfect 50/50 balance and a soul-stirring inline-six.',
    specs: {
      engine: '3.0L Turbo Inline-6',
      power: '382 hp',
      topSpeed: '155 mph',
      zeroToSixty: '3.9s'
    },
    modelUrl: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/toyota-supra/model.gltf',
    image: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?auto=format&fit=crop&q=80&w=800'
  }
];
