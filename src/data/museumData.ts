import { Car, Manufacturer, Country } from '../types';
import { modelUrls } from '../assets/models';

// Cycle through local GLBs for variety
const m = [modelUrls.car, modelUrls.ferrari, modelUrls.audi, modelUrls.bmw, modelUrls.mclaren, modelUrls.volga];
const glb = (i: number) => m[i % m.length];

export const countries: Country[] = [
  {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    description: 'The birthplace of the modern automobile, known for precision engineering and luxury performance.',
    history: 'Germany is widely considered the birthplace of the automobile, with Karl Benz inventing the first gasoline-powered car in 1886.',
    automotiveHeritage: 'From the Autobahn to the Nürburgring, Germany has shaped automotive culture through brands like Porsche, BMW, and Mercedes-Benz.'
  },
  {
    id: 'italy',
    name: 'Italy',
    flag: '🇮🇹',
    description: 'Synonymous with passion, exotic design, and racing heritage.',
    history: 'Italy has a long history of craftsmanship and design, which translated into some of the most beautiful and fast cars in the world.',
    automotiveHeritage: 'The home of Ferrari, Lamborghini, and Maserati, Italy is the heart of the supercar world.'
  },
  {
    id: 'japan',
    name: 'Japan',
    flag: '🇯🇵',
    description: 'Pioneers of reliability, efficiency, and cutting-edge technology.',
    history: 'Post-WWII Japan focused on industrial growth, leading to the rise of global giants that redefined vehicle reliability.',
    automotiveHeritage: 'Japan introduced the world to lean manufacturing and the legendary JDM culture, giving us icons like the GT-R and NSX.'
  },
  {
    id: 'usa',
    name: 'USA',
    flag: '🇺🇸',
    description: 'Home of the muscle car and the spirit of the open road.',
    history: 'The USA revolutionized car production with the assembly line, making automobiles accessible to the masses.',
    automotiveHeritage: 'The land of V8 muscle, Route 66, and the innovation of companies like Ford, Chevrolet, and Tesla.'
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    description: 'Elegance, luxury, and a deep-rooted history in motorsport.',
    history: 'The UK was a pioneer in the early 20th century, creating some of the most prestigious luxury brands.',
    automotiveHeritage: 'Home to Aston Martin, McLaren, Rolls-Royce, and Lotus — the UK blends tradition with high-performance engineering.'
  },
  {
    id: 'france',
    name: 'France',
    flag: '🇫🇷',
    description: 'Innovation, avant-garde design, and the pinnacle of luxury.',
    history: 'France was an early leader in automotive development, with brands like Bugatti setting speed records in the 1920s.',
    automotiveHeritage: 'From the ultra-luxurious Bugatti to the nimble Alpine A110, French cars are always distinctive.'
  },
  {
    id: 'sweden',
    name: 'Sweden',
    flag: '🇸🇪',
    description: 'Safety, sustainability, and extreme hypercars.',
    history: 'Swedish automotive history is defined by a focus on safety and durability in harsh climates.',
    automotiveHeritage: 'Volvo pioneered safety features while Koenigsegg redefined what is possible in a hypercar.'
  },
  {
    id: 'south-korea',
    name: 'South Korea',
    flag: '🇰🇷',
    description: 'Rapid innovation and high-tech value.',
    history: 'South Korea transformed from a developing nation to a global automotive powerhouse in just a few decades.',
    automotiveHeritage: 'Hyundai, Kia, and Genesis have become leaders in electric vehicles, design, and modern technology.'
  },
  {
    id: 'croatia',
    name: 'Croatia',
    flag: '🇭🇷',
    description: 'The future of electric hypercars.',
    history: 'A newcomer to the global stage, Croatia has made a massive impact through electric innovation.',
    automotiveHeritage: 'Rimac Automobili is leading the charge in high-performance electric drivetrains.'
  },
  {
    id: 'netherlands',
    name: 'Netherlands',
    flag: '🇳🇱',
    description: 'Boutique engineering and unique design.',
    history: 'The Dutch have a history of small, highly specialized manufacturers.',
    automotiveHeritage: 'Spyker and Donkervoort are known for aviation-inspired interiors and featherweight performance cars.'
  },
  {
    id: 'india',
    name: 'India',
    flag: '🇮🇳',
    description: 'Mass mobility and emerging luxury.',
    history: 'India is one of the largest car markets in the world, with a focus on affordable and rugged vehicles.',
    automotiveHeritage: 'Tata Motors and Mahindra are expanding globally, with Tata owning Jaguar Land Rover.'
  },
  {
    id: 'china',
    name: 'China',
    flag: '🇨🇳',
    description: 'The global leader in electric vehicle adoption.',
    history: 'China has rapidly become the world\'s largest producer and consumer of electric vehicles.',
    automotiveHeritage: 'Brands like BYD, NIO, and Xpeng are at the forefront of the EV revolution.'
  },
  {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    description: 'Rugged performance and the "Ute" culture.',
    history: 'Australia developed a unique car culture suited to its vast and varied landscape.',
    automotiveHeritage: 'Holden and Ford Australia created legendary muscle cars and utility vehicles for the outback.'
  },
  {
    id: 'spain',
    name: 'Spain',
    flag: '🇪🇸',
    description: 'Sporty design and Mediterranean flair.',
    history: 'Spain has a strong manufacturing base and a history of producing accessible, sporty cars.',
    automotiveHeritage: 'SEAT and CUPRA represent Spain\'s automotive passion — from family hatches to electric performance.'
  },
  {
    id: 'czech-republic',
    name: 'Czech Republic',
    flag: '🇨🇿',
    description: 'Practicality and clever engineering.',
    history: 'One of the oldest automotive industries in the world, with a focus on value and smart features.',
    automotiveHeritage: 'Škoda is one of the world\'s oldest car manufacturers still in operation, now part of Volkswagen Group.'
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    flag: '🇨🇭',
    description: 'Precision and experimental concepts.',
    history: 'While not a mass producer, Switzerland is home to innovative design houses and niche manufacturers.',
    automotiveHeritage: 'Rinspeed is famous for wild concept cars, and the Smart city car originated from a Swiss-German collaboration.'
  },
  {
    id: 'uae',
    name: 'UAE',
    flag: '🇦🇪',
    description: 'Extravagant luxury and extreme speed.',
    history: 'The UAE has recently entered the manufacturing scene with ultra-exclusive hypercars.',
    automotiveHeritage: 'W Motors created the Lykan HyperSport, one of the most expensive and exclusive cars ever made.'
  },
  {
    id: 'mexico',
    name: 'Mexico',
    flag: '🇲🇽',
    description: 'Lightweight performance and manufacturing hub.',
    history: 'Mexico is a major global manufacturing hub and has begun developing its own sports cars.',
    automotiveHeritage: 'Mastretta is Mexico\'s first major sports car manufacturer, built for the winding roads of Latin America.'
  },
  {
    id: 'brazil',
    name: 'Brazil',
    flag: '🇧🇷',
    description: 'Unique local adaptations and sports cars.',
    history: 'Brazil has a history of creating unique versions of global cars and its own niche sports cars.',
    automotiveHeritage: 'Puma was a legendary Brazilian sports car brand in the 70s and 80s, built on VW mechanicals.'
  },
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    description: 'Advanced manufacturing and specialized vehicles.',
    history: 'Canada is a key part of the North American automotive industry.',
    automotiveHeritage: 'Magna International is one of the world\'s largest automotive suppliers, and BRP leads in powersports globally.'
  },
  {
    id: 'russia',
    name: 'Russia',
    flag: '🇷🇺',
    description: 'Ruggedness and utility.',
    history: 'Russian cars are built to survive some of the harshest conditions on Earth.',
    automotiveHeritage: 'LADA and UAZ are known for their simplicity, off-road capability, and legendary toughness.'
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    flag: '🇻🇳',
    description: 'Emerging electric powerhouse.',
    history: 'Vietnam is the newest major player in the global automotive industry.',
    automotiveHeritage: 'VinFast is rapidly expanding its all-electric lineup globally from its roots in Hanoi.'
  },
  {
    id: 'turkey',
    name: 'Turkey',
    flag: '🇹🇷',
    description: 'Modern electric mobility.',
    history: 'Turkey has long been a manufacturing hub and is now launching its own national EV brand.',
    automotiveHeritage: 'TOGG is the first Turkish-designed electric vehicle brand, backed by a national industrial consortium.'
  },
  {
    id: 'romania',
    name: 'Romania',
    flag: '🇷🇴',
    description: 'Unbeatable value and robustness.',
    history: 'Romania produces some of the most affordable and reliable cars in Europe.',
    automotiveHeritage: 'Dacia has become a massive success story across Europe with the Logan, Sandero, and Duster.'
  },
  {
    id: 'poland',
    name: 'Poland',
    flag: '🇵🇱',
    description: 'Resurgent engineering and supercars.',
    history: 'Poland has a long history of car manufacturing that is seeing a modern revival.',
    automotiveHeritage: 'Arrinera is Poland\'s first supercar manufacturer, producing the Hussarya track car.'
  }
];

export const manufacturers: Manufacturer[] = [
  // Germany
  { id: 'porsche', name: 'Porsche', countryId: 'germany', logo: 'https://logo.clearbit.com/porsche.com', history: 'Founded in 1931 by Ferdinand Porsche in Stuttgart, Porsche initially offered engineering consulting before producing its own sports cars, most famously the 911, introduced in 1963.' },
  { id: 'volkswagen', name: 'Volkswagen', countryId: 'germany', logo: 'https://logo.clearbit.com/volkswagen.com', history: 'Founded in 1937, Volkswagen ("People\'s Car") became one of the world\'s largest automakers, known globally for the Beetle and Golf.' },
  { id: 'bmw', name: 'BMW', countryId: 'germany', logo: 'https://logo.clearbit.com/bmw.com', history: 'Bayerische Motoren Werke was founded in 1916 as an aircraft engine manufacturer before transitioning to motorcycles and automobiles in 1928.' },
  { id: 'mercedes-benz', name: 'Mercedes-Benz', countryId: 'germany', logo: 'https://logo.clearbit.com/mercedes-benz.com', history: 'Formed by the 1926 merger of Benz & Cie (est. 1883) and Daimler-Motoren-Gesellschaft (est. 1890), Mercedes-Benz is one of the oldest and most prestigious automakers in the world.' },
  { id: 'audi', name: 'Audi', countryId: 'germany', logo: 'https://logo.clearbit.com/audi.com', history: 'Founded in 1909 by August Horch in Zwickau, Audi became part of the Auto Union conglomerate in 1932 and was reestablished in 1965 as a premium brand under Volkswagen Group.' },
  // Italy
  { id: 'ferrari', name: 'Ferrari', countryId: 'italy', logo: 'https://logo.clearbit.com/ferrari.com', history: 'Founded by Enzo Ferrari in Maranello in 1939 (road cars from 1947), Ferrari is the world\'s most iconic sports car manufacturer with an unmatched Formula One legacy.' },
  { id: 'lamborghini', name: 'Lamborghini', countryId: 'italy', logo: 'https://logo.clearbit.com/lamborghini.com', history: 'Founded by tractor manufacturer Ferruccio Lamborghini in 1963 after a dispute with Enzo Ferrari, Lamborghini produces extreme high-performance supercars.' },
  { id: 'alfa-romeo', name: 'Alfa Romeo', countryId: 'italy', logo: 'https://logo.clearbit.com/alfaromeo.com', history: 'Founded in Milan in 1910, Alfa Romeo has a storied racing heritage and is celebrated for combining Italian style with spirited driving dynamics.' },
  { id: 'maserati', name: 'Maserati', countryId: 'italy', logo: 'https://logo.clearbit.com/maserati.com', history: 'Founded in Bologna in 1914 by the Maserati brothers, the company built racing cars before expanding to grand tourers; its trident logo is inspired by Bologna\'s Neptune fountain.' },
  { id: 'pagani', name: 'Pagani', countryId: 'italy', logo: 'https://logo.clearbit.com/pagani.com', history: 'Founded by Horacio Pagani in 1992 in Modena, Pagani produces hand-built hypercars such as the Zonda and Huayra, celebrated for their carbon-fiber craftsmanship.' },
  // Japan
  { id: 'toyota', name: 'Toyota', countryId: 'japan', logo: 'https://logo.clearbit.com/toyota.com', history: 'Founded by Kiichiro Toyoda in 1937, Toyota became the world\'s largest automaker, renowned for pioneering lean manufacturing and hybrid technology with the Prius.' },
  { id: 'honda', name: 'Honda', countryId: 'japan', logo: 'https://logo.clearbit.com/honda.com', history: 'Founded by Soichiro Honda in 1948, Honda grew from a motorcycle maker into the world\'s largest engine manufacturer, known for VTEC technology and the legendary NSX.' },
  { id: 'nissan', name: 'Nissan', countryId: 'japan', logo: 'https://logo.clearbit.com/nissan.com', history: 'Established in 1933 in Yokohama, Nissan is famous for the GT-R supercar and the Leaf, one of the world\'s best-selling electric vehicles.' },
  { id: 'mazda', name: 'Mazda', countryId: 'japan', logo: 'https://logo.clearbit.com/mazda.com', history: 'Founded in Hiroshima in 1920, Mazda became famous for championing the Wankel rotary engine in iconic models like the RX-7 and RX-8.' },
  { id: 'subaru', name: 'Subaru', countryId: 'japan', logo: 'https://logo.clearbit.com/subaru.com', history: 'Subaru\'s automotive division was established in 1953; the brand is distinguished by its standard all-wheel-drive systems and horizontally opposed boxer engines.' },
  { id: 'lexus', name: 'Lexus', countryId: 'japan', logo: 'https://logo.clearbit.com/lexus.com', history: 'Launched by Toyota in 1989, Lexus is Japan\'s leading luxury brand, known for near-silent ride quality, high reliability, and the LFA supercar.' },
  // USA
  { id: 'ford', name: 'Ford', countryId: 'usa', logo: 'https://logo.clearbit.com/ford.com', history: 'Founded by Henry Ford in 1903, Ford revolutionized manufacturing with the moving assembly line in 1913, making the Model T the world\'s first mass-market affordable automobile.' },
  { id: 'tesla', name: 'Tesla', countryId: 'usa', logo: 'https://logo.clearbit.com/tesla.com', history: 'Founded in 2003 in San Carlos, California, Tesla has transformed the automotive industry by mainstreaming battery-electric vehicles and over-the-air software updates.' },
  { id: 'chevrolet', name: 'Chevrolet', countryId: 'usa', logo: 'https://logo.clearbit.com/chevrolet.com', history: 'Co-founded by Louis Chevrolet and William Durant in 1911, Chevrolet is known for the Corvette sports car, Silverado pickup, and Camaro muscle car.' },
  { id: 'dodge', name: 'Dodge', countryId: 'usa', logo: 'https://logo.clearbit.com/dodge.com', history: 'Founded by brothers John and Horace Dodge in 1900 in Detroit, Dodge is celebrated for V8 muscle cars including the Charger, Challenger, and the legendary Viper.' },
  { id: 'cadillac', name: 'Cadillac', countryId: 'usa', logo: 'https://logo.clearbit.com/cadillac.com', history: 'Founded in Detroit in 1902 and acquired by GM in 1909, Cadillac pioneered the electric starter, the V8 engine, and synchromesh transmission — America\'s standard of luxury.' },
  // UK
  { id: 'aston-martin', name: 'Aston Martin', countryId: 'uk', logo: 'https://logo.clearbit.com/astonmartin.com', history: 'Founded by Lionel Martin and Robert Bamford in 1913 in London, Aston Martin is celebrated for hand-built grand tourers and is famously associated with James Bond.' },
  { id: 'mclaren', name: 'McLaren', countryId: 'uk', logo: 'https://logo.clearbit.com/mclaren.com', history: 'Founded by Bruce McLaren in 1963 in Surrey, McLaren is one of the most successful F1 constructors and produces bespoke high-performance road cars at its Woking headquarters.' },
  { id: 'rolls-royce', name: 'Rolls-Royce', countryId: 'uk', logo: 'https://logo.clearbit.com/rolls-royce.com', history: 'Founded in Manchester in 1906 by Charles Rolls and Henry Royce, Rolls-Royce is the benchmark of ultra-luxury motoring; the automotive brand has been owned by BMW since 1998.' },
  { id: 'bentley', name: 'Bentley', countryId: 'uk', logo: 'https://logo.clearbit.com/bentley.com', history: 'Founded by W.O. Bentley in London in 1919, Bentley won Le Mans five times and is now owned by Volkswagen Group, producing grand tourers and luxury SUVs.' },
  { id: 'jaguar', name: 'Jaguar', countryId: 'uk', logo: 'https://logo.clearbit.com/jaguar.com', history: 'Founded as the Swallow Sidecar Company in 1922 by William Lyons, Jaguar became renowned for elegant sports cars and saloons; now part of Tata Motors\' JLR group.' },
  { id: 'lotus', name: 'Lotus', countryId: 'uk', logo: 'https://logo.clearbit.com/lotuscars.com', history: 'Founded by Colin Chapman in 1948, Lotus is renowned for its lightweight engineering philosophy and has won seven F1 Constructors\' Championships; now majority-owned by Geely.' },
  // France
  { id: 'bugatti', name: 'Bugatti', countryId: 'france', logo: 'https://logo.clearbit.com/bugatti.com', history: 'Founded by Ettore Bugatti in Molsheim in 1909, Bugatti produced technically advanced racing cars pre-war; the modern brand under Volkswagen Group builds the Veyron and Chiron hypercars.' },
  { id: 'renault', name: 'Renault', countryId: 'france', logo: 'https://logo.clearbit.com/renault.com', history: 'Founded by Louis Renault and his brothers in Billancourt in 1899, Renault is France\'s largest automaker and a pioneer in electric vehicles through its Zoe and Megane E-Tech.' },
  { id: 'alpine', name: 'Alpine', countryId: 'france', logo: 'https://logo.clearbit.com/alpinecars.com', history: 'Founded by Jean Rédélé in Dieppe in 1955, Alpine produced lightweight rear-engined sports cars; revived by Renault in 2017, it now fields an F1 team alongside the A110.' },
  // Sweden
  { id: 'koenigsegg', name: 'Koenigsegg', countryId: 'sweden', logo: 'https://logo.clearbit.com/koenigsegg.com', history: 'Founded by Christian von Koenigsegg in 1994 in Ängelholm, Koenigsegg produces a small number of record-breaking hypercars, repeatedly setting world speed records.' },
  { id: 'volvo', name: 'Volvo', countryId: 'sweden', logo: 'https://logo.clearbit.com/volvocars.com', history: 'Founded in Gothenburg in 1927, Volvo built its global reputation on automotive safety innovations; it has been owned by China\'s Geely since 2010.' },
  // South Korea
  { id: 'hyundai', name: 'Hyundai', countryId: 'south-korea', logo: 'https://logo.clearbit.com/hyundai.com', history: 'Founded in Seoul in 1967, Hyundai grew from assembling Ford vehicles to becoming one of the world\'s largest automakers, earning recognition for bold EV investment with the IONIQ range.' },
  { id: 'kia', name: 'Kia', countryId: 'south-korea', logo: 'https://logo.clearbit.com/kia.com', history: 'Founded in 1944 as Korea\'s first steel-tube and bicycle manufacturer, Kia became South Korea\'s second-largest automaker and a subsidiary of Hyundai since 1998.' },
  { id: 'genesis', name: 'Genesis', countryId: 'south-korea', logo: 'https://logo.clearbit.com/genesis.com', history: 'Launched by Hyundai Motor Group in 2015 as a standalone luxury brand, Genesis has rapidly gained recognition for its design language and EV models, competing with European luxury marques.' },
  // Croatia
  { id: 'rimac', name: 'Rimac', countryId: 'croatia', logo: 'https://logo.clearbit.com/rimac-automobili.com', history: 'Founded by Mate Rimac in Zagreb in 2009, Rimac Automobili produces all-electric hypercars and is a leading supplier of EV powertrain technology; Porsche is among its investors.' },
  // Netherlands
  { id: 'spyker', name: 'Spyker', countryId: 'netherlands', logo: 'https://logo.clearbit.com/spyker.com', history: 'Originally founded in 1880 and revived as a sports car brand in 2000, Spyker is known for its aviation-inspired interiors and the hand-built C8 sports car.' },
  // India
  { id: 'tata', name: 'Tata Motors', countryId: 'india', logo: 'https://logo.clearbit.com/tatamotors.com', history: 'Founded in Mumbai in 1945 as part of the Tata Group, Tata Motors is India\'s largest automotive company and the parent of Jaguar Land Rover, acquired in 2008.' },
  { id: 'mahindra', name: 'Mahindra', countryId: 'india', logo: 'https://logo.clearbit.com/mahindra.com', history: 'Founded in Mumbai in 1945, Mahindra & Mahindra is India\'s leading SUV manufacturer and a growing force in electric mobility through its XUV and Thar series.' },
  // China
  { id: 'byd', name: 'BYD', countryId: 'china', logo: 'https://logo.clearbit.com/byd.com', history: 'Founded in Shenzhen in 1995 initially as a battery manufacturer, BYD Auto became the world\'s largest seller of new energy vehicles in 2022, overtaking Tesla in plug-in sales.' },
  { id: 'nio', name: 'NIO', countryId: 'china', logo: 'https://logo.clearbit.com/nio.com', history: 'Founded in Shanghai in 2014, NIO is a premium Chinese EV manufacturer known for its battery-swap technology, direct sales model, and premium lifestyle services.' },
  // Australia
  { id: 'holden', name: 'Holden', countryId: 'australia', logo: 'https://logo.clearbit.com/holden.com.au', history: 'Founded in Adelaide in 1856 as a saddlery, Holden became Australia\'s first domestic car manufacturer in 1948; the brand was retired by General Motors in 2021.' },
  // Spain
  { id: 'seat', name: 'SEAT', countryId: 'spain', logo: 'https://logo.clearbit.com/seat.com', history: 'Founded in Barcelona in 1950 with Fiat\'s technical support, SEAT became part of Volkswagen Group in 1986 and now also operates the CUPRA performance sub-brand.' },
  { id: 'cupra', name: 'CUPRA', countryId: 'spain', logo: 'https://logo.clearbit.com/cupraofficial.com', history: 'Spun off from SEAT in 2018 as an independent performance brand within Volkswagen Group, CUPRA has quickly established itself with sporty electric and hybrid models.' },
  // Czech Republic
  { id: 'skoda', name: 'Škoda', countryId: 'czech-republic', logo: 'https://logo.clearbit.com/skoda-auto.com', history: 'Founded in Mladá Boleslav in 1895 by Václav Laurin and Václav Klement as a bicycle maker, Škoda is one of the world\'s oldest continuously operating car manufacturers, now under Volkswagen Group.' },
  // UAE
  { id: 'w-motors', name: 'W Motors', countryId: 'uae', logo: 'https://logo.clearbit.com/wmotors.ae', history: 'Founded in 2012 in Dubai, W Motors is the Arab world\'s first supercar manufacturer, known for the Lykan HyperSport which appeared in the Fast & Furious 7 film.' },
  // Russia
  { id: 'lada', name: 'LADA', countryId: 'russia', logo: 'https://logo.clearbit.com/lada.ru', history: 'AvtoVAZ was founded in Tolyatti in 1966 with Italian Fiat assistance and produces LADA vehicles; Russia\'s largest automotive manufacturer, known for rugged and affordable cars.' },
  // Vietnam
  { id: 'vinfast', name: 'VinFast', countryId: 'vietnam', logo: 'https://logo.clearbit.com/vinfastauto.com', history: 'Founded in 2017 in Hanoi as part of the Vingroup conglomerate, VinFast is Vietnam\'s first domestic car brand, pivoting to an all-electric lineup in 2022 and expanding globally.' },
  // Turkey
  { id: 'togg', name: 'TOGG', countryId: 'turkey', logo: 'https://logo.clearbit.com/togg.com.tr', history: 'Established in 2018 as a national initiative backed by major Turkish industry groups, TOGG produces the country\'s first domestically designed electric SUV, the T10X.' },
  // Romania
  { id: 'dacia', name: 'Dacia', countryId: 'romania', logo: 'https://logo.clearbit.com/dacia.com', history: 'Founded in Pitești in 1966 with Renault technical assistance, Dacia became Romania\'s national car brand; now under Renault Group, it is Europe\'s best-value new car brand.' },
  // Switzerland
  { id: 'rinspeed', name: 'Rinspeed', countryId: 'switzerland', logo: 'https://logo.clearbit.com/rinspeed.com', history: 'Founded by Frank M. Rinderknecht in Zumikon in 1979, Rinspeed is a Swiss concept car company famous for radical, future-focused concepts shown annually at the Geneva Motor Show.' },
  // Mexico
  { id: 'mastretta', name: 'Mastretta', countryId: 'mexico', logo: 'https://logo.clearbit.com/mastretta.com.mx', history: 'Founded in Mexico City in 1987 by brothers Daniel and Pablo Mastretta, Mastretta MXT is Mexico\'s first homegrown sports car, designed and engineered entirely in Mexico.' },
  // Brazil
  { id: 'puma', name: 'Puma', countryId: 'brazil', logo: 'https://logo.clearbit.com/pumacar.com.br', history: 'Founded in São Paulo in 1964, Puma Veículos produced fiberglass-bodied sports cars on Volkswagen and DKW mechanicals — Brazil\'s most iconic homegrown sports car of the 1970s.' },
  // Canada
  { id: 'brp', name: 'BRP', countryId: 'canada', logo: 'https://logo.clearbit.com/brp.com', history: 'Founded by Joseph-Armand Bombardier in Valcourt, Québec in 1942, BRP is Canada\'s premier powersports manufacturer, known for Ski-Doo, Sea-Doo, and the Can-Am road vehicles.' },
  // Poland
  { id: 'arrinera', name: 'Arrinera', countryId: 'poland', logo: 'https://logo.clearbit.com/arrinera.com', history: 'Founded in Warsaw in 2008, Arrinera Automotive is Poland\'s first supercar manufacturer, producing the Hussarya — a mid-engine track-focused supercar with 650 hp.' },
];

export const cars: Car[] = [
  // ── Germany ──────────────────────────────────────────────
  {
    id: 'porsche-911',
    name: '911 Carrera S',
    year: 2023,
    manufacturerId: 'porsche',
    countryId: 'germany',
    description: 'The definitive sports car. A timeless design combined with modern performance.',
    history: 'The 911 was introduced in 1963 as a more powerful, larger replacement for the Porsche 356. Over six decades it has evolved while keeping its signature rear-engine layout.',
    specs: { engine: '3.0L Twin-Turbo Flat-6', power: '443 hp', topSpeed: '191 mph', zeroToSixty: '3.5s' },
    modelUrl: glb(0),
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'vw-golf-r',
    name: 'Golf R',
    year: 2023,
    manufacturerId: 'volkswagen',
    countryId: 'germany',
    description: 'The benchmark hot hatch. Four-wheel drive, 333 hp, and everyday usability in a practical package.',
    history: 'The Golf R is the pinnacle of Volkswagen\'s Golf range, first introduced in 2002 and refined through eight generations into the ultimate all-weather performance hatch.',
    specs: { engine: '2.0L Turbo Inline-4', power: '333 hp', topSpeed: '155 mph', zeroToSixty: '4.7s' },
    modelUrl: glb(1),
    image: 'https://images.unsplash.com/photo-1541443131876-96f1aa89e98d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bmw-m3',
    name: 'M3 Competition',
    year: 2023,
    manufacturerId: 'bmw',
    countryId: 'germany',
    description: 'The ultimate driving machine. BMW\'s iconic sports sedan with a twin-turbo straight-six.',
    history: 'The M3 debuted in 1986 homologating the E30 for touring car racing. It became the definitive sports sedan benchmark over its six generations.',
    specs: { engine: '3.0L Twin-Turbo Inline-6', power: '503 hp', topSpeed: '180 mph', zeroToSixty: '3.4s' },
    modelUrl: glb(2),
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mercedes-amg-gt',
    name: 'AMG GT Black Series',
    year: 2021,
    manufacturerId: 'mercedes-benz',
    countryId: 'germany',
    description: 'Mercedes-AMG\'s most extreme road car ever — a track weapon with a flat-plane V8.',
    history: 'The GT Black Series set a production car lap record at the Nürburgring in 2021. Its 730 hp flat-plane crank V8 is shared with the AMG GT3 race car.',
    specs: { engine: '4.0L Biturbo V8 Flat-Plane', power: '730 hp', topSpeed: '202 mph', zeroToSixty: '3.2s' },
    modelUrl: glb(3),
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'audi-r8',
    name: 'R8 V10 Performance',
    year: 2022,
    manufacturerId: 'audi',
    countryId: 'germany',
    description: 'A mid-engine, naturally aspirated V10 supercar — Audi\'s everyday exotic.',
    history: 'Launched in 2006, the R8 shared its V10 engine with the Lamborghini Gallardo. It became famous as the car driven by Marvel\'s Iron Man, Tony Stark.',
    specs: { engine: '5.2L Naturally Aspirated V10', power: '602 hp', topSpeed: '205 mph', zeroToSixty: '3.1s' },
    modelUrl: glb(4),
    image: 'https://images.unsplash.com/photo-1563720223809-b4e90a04ea6e?auto=format&fit=crop&q=80&w=800'
  },

  // ── Italy ──────────────────────────────────────────────
  {
    id: 'ferrari-458',
    name: '458 Italia',
    year: 2015,
    manufacturerId: 'ferrari',
    countryId: 'italy',
    description: 'A masterpiece of Italian engineering, featuring a naturally aspirated V8 that sings to 9,000 rpm.',
    history: 'The 458 Italia replaced the F430 and was first unveiled at the 2009 Frankfurt Motor Show. Its F1-derived aerodynamics produce 140 kg of downforce at top speed.',
    specs: { engine: '4.5L V8', power: '562 hp', topSpeed: '202 mph', zeroToSixty: '3.4s' },
    modelUrl: glb(5),
    image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'lamborghini-huracan',
    name: 'Huracán STO',
    year: 2021,
    manufacturerId: 'lamborghini',
    countryId: 'italy',
    description: 'Super Trofeo Omologata — a racing champion stripped for the road. Raw, loud, unapologetic.',
    history: 'The Huracán STO takes 75% of its components from the Super Trofeo and GT3 race cars, including a carbon fiber hood, fenders, and rear wing.',
    specs: { engine: '5.2L Naturally Aspirated V10', power: '630 hp', topSpeed: '193 mph', zeroToSixty: '3.0s' },
    modelUrl: glb(0),
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'alfa-romeo-giulia-gta',
    name: 'Giulia GTA',
    year: 2021,
    manufacturerId: 'alfa-romeo',
    countryId: 'italy',
    description: 'Gran Turismo Alleggerita — 100 kg lighter than the already brilliant Giulia Quadrifoglio.',
    history: 'Celebrating the 50th anniversary of the original GTA, the 2021 Giulia GTA uses carbon fiber body panels and Nürburgring-honed aerodynamics.',
    specs: { engine: '2.9L Twin-Turbo V6', power: '540 hp', topSpeed: '191 mph', zeroToSixty: '3.6s' },
    modelUrl: glb(1),
    image: 'https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'maserati-mc20',
    name: 'MC20',
    year: 2022,
    manufacturerId: 'maserati',
    countryId: 'italy',
    description: 'Maserati\'s triumphant return to supercars after 15 years — butterfly doors and a twin-turbo V6.',
    history: 'The MC20 marks Maserati\'s first in-house developed supercar since the MC12 in 2004. Its Nettuno V6 engine uses F1-style pre-chamber combustion technology.',
    specs: { engine: '3.0L Twin-Turbo V6 Nettuno', power: '621 hp', topSpeed: '202 mph', zeroToSixty: '2.9s' },
    modelUrl: glb(2),
    image: 'https://images.unsplash.com/photo-1599912027611-484b9fc447af?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pagani-huayra',
    name: 'Huayra R',
    year: 2022,
    manufacturerId: 'pagani',
    countryId: 'italy',
    description: 'A track-only sculpture producing 850 hp from a naturally aspirated V12 — art you can drive.',
    history: 'Named after Huayra-tata, the Andean god of wind, the Huayra R is Pagani\'s most extreme creation: a naturally aspirated 6.0L Mercedes-AMG V12 revving to 9,000 rpm.',
    specs: { engine: '6.0L NA V12 (AMG)', power: '850 hp', topSpeed: '218 mph', zeroToSixty: '2.7s' },
    modelUrl: glb(3),
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800'
  },

  // ── Japan ──────────────────────────────────────────────
  {
    id: 'toyota-supra',
    name: 'GR Supra',
    year: 2022,
    manufacturerId: 'toyota',
    countryId: 'japan',
    description: 'A legend reborn. The Supra returns with a perfect 50/50 balance and a soul-stirring inline-six.',
    history: 'The Supra nameplate returned in 2019 after a 17-year hiatus, developed in collaboration with BMW. It shares its platform and engine with the BMW Z4.',
    specs: { engine: '3.0L Turbo Inline-6', power: '382 hp', topSpeed: '155 mph', zeroToSixty: '3.9s' },
    modelUrl: glb(4),
    image: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'honda-nsx',
    name: 'NSX Type S',
    year: 2022,
    manufacturerId: 'honda',
    countryId: 'japan',
    description: 'Japan\'s supercar. A twin-turbo V6 mid-engine hybrid with three electric motors.',
    history: 'The original 1990 NSX was designed with input from Ayrton Senna. The second-generation hybrid NSX Type S closed production with 600 hp and Sport Hybrid SH-AWD.',
    specs: { engine: '3.5L Twin-Turbo V6 Hybrid', power: '600 hp', topSpeed: '191 mph', zeroToSixty: '2.9s' },
    modelUrl: glb(5),
    image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'nissan-gtr',
    name: 'GT-R NISMO',
    year: 2023,
    manufacturerId: 'nissan',
    countryId: 'japan',
    description: '"Godzilla" — the 600 hp all-wheel-drive titan that has humiliated supercars for 15 years.',
    history: 'The R35 GT-R debuted in 2007 and shocked the world by matching Ferrari and Porsche at a fraction of the price. The NISMO variant receives GT3 race car components.',
    specs: { engine: '3.8L Twin-Turbo V6', power: '600 hp', topSpeed: '205 mph', zeroToSixty: '2.5s' },
    modelUrl: glb(0),
    image: 'https://images.unsplash.com/photo-1518987048-93e29699e79a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mazda-rx7',
    name: 'RX-7 FD',
    year: 1998,
    manufacturerId: 'mazda',
    countryId: 'japan',
    description: 'The most refined rotary sports car ever built — a lightweight, twin-turbocharged icon.',
    history: 'The third-generation RX-7 (FD, 1992–2002) is widely considered one of the finest driver\'s cars ever made. Its twin-rotor 13B-REW engine is unique in automotive history.',
    specs: { engine: '1.3L Twin-Turbo 13B Rotary', power: '255 hp', topSpeed: '156 mph', zeroToSixty: '5.0s' },
    modelUrl: glb(1),
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'subaru-wrx-sti',
    name: 'WRX STI',
    year: 2021,
    manufacturerId: 'subaru',
    countryId: 'japan',
    description: 'The rally legend for the road. Symmetrical AWD, a boxer turbo, and an iconic rear wing.',
    history: 'The STI nameplate traces back to 1988. The WRX STI dominated the World Rally Championship in the late 1990s and early 2000s with drivers like Colin McRae and Richard Burns.',
    specs: { engine: '2.5L Turbo Flat-4', power: '310 hp', topSpeed: '159 mph', zeroToSixty: '4.8s' },
    modelUrl: glb(2),
    image: 'https://images.unsplash.com/photo-1604054923029-ed91f0d47e29?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'lexus-lfa',
    name: 'LFA',
    year: 2012,
    manufacturerId: 'lexus',
    countryId: 'japan',
    description: 'Japan\'s greatest supercar. A 9,000 rpm naturally aspirated V10 and a carbon-fiber body.',
    history: 'The LFA took 10 years to develop. Its Yamaha-developed V10 revs so quickly that an analog tachometer could not keep up — Lexus used a digital display instead.',
    specs: { engine: '4.8L Naturally Aspirated V10', power: '553 hp', topSpeed: '202 mph', zeroToSixty: '3.6s' },
    modelUrl: glb(3),
    image: 'https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?auto=format&fit=crop&q=80&w=800'
  },

  // ── USA ──────────────────────────────────────────────
  {
    id: 'tesla-model-3',
    name: 'Model 3 Performance',
    year: 2024,
    manufacturerId: 'tesla',
    countryId: 'usa',
    description: 'The electric car that changed everything. Minimalist design with supercar acceleration.',
    history: 'The Model 3 was unveiled in 2016 and became the world\'s best-selling electric car. Over 1.8 million units were delivered in 2023 alone.',
    specs: { engine: 'Dual Motor AWD', power: '510 hp', topSpeed: '163 mph', zeroToSixty: '2.9s' },
    modelUrl: glb(4),
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ford-gt',
    name: 'GT',
    year: 2020,
    manufacturerId: 'ford',
    countryId: 'usa',
    description: 'Ford\'s Le Mans tribute — a carbon-fiber hypercar inspired by the legendary GT40.',
    history: 'The second-generation GT (2017–2022) won its class at Le Mans in 2016, exactly 50 years after Ford\'s famous 1-2-3 sweep. Only 1,350 units were built.',
    specs: { engine: '3.5L EcoBoost Twin-Turbo V6', power: '660 hp', topSpeed: '216 mph', zeroToSixty: '3.0s' },
    modelUrl: glb(5),
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'chevrolet-corvette-z06',
    name: 'Corvette Z06',
    year: 2023,
    manufacturerId: 'chevrolet',
    countryId: 'usa',
    description: 'America\'s track weapon — a flat-plane crank V8 mid-engine monster that rivals European exotics.',
    history: 'The C8 Z06 introduced the LT6: a 5.5L naturally aspirated flat-plane crank V8 revving to 8,600 rpm — the most powerful NA V8 ever put in a production car.',
    specs: { engine: '5.5L NA V8 LT6 Flat-Plane', power: '670 hp', topSpeed: '195 mph', zeroToSixty: '2.6s' },
    modelUrl: glb(0),
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'dodge-viper',
    name: 'Viper ACR',
    year: 2017,
    manufacturerId: 'dodge',
    countryId: 'usa',
    description: 'The American Clubsport Racer — no traction control, no ABS, just 645 hp of raw V10 fury.',
    history: 'The Viper ACR (American Club Racer) held production car lap records at more than 13 tracks worldwide. The 8.4L V10 remains the largest production sports car engine ever made.',
    specs: { engine: '8.4L V10', power: '645 hp', topSpeed: '177 mph', zeroToSixty: '3.4s' },
    modelUrl: glb(1),
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cadillac-ct5-v-blackwing',
    name: 'CT5-V Blackwing',
    year: 2022,
    manufacturerId: 'cadillac',
    countryId: 'usa',
    description: 'The last great American V8 supersedan — 668 hp, rear-wheel drive, and a manual gearbox option.',
    history: 'The CT5-V Blackwing uses a supercharged 6.2L V8 from the Corvette Z06 C7. It is one of the last sedans available with a manual transmission in the world.',
    specs: { engine: '6.2L Supercharged V8', power: '668 hp', topSpeed: '200 mph', zeroToSixty: '3.4s' },
    modelUrl: glb(2),
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800'
  },

  // ── United Kingdom ──────────────────────────────────────────────
  {
    id: 'aston-martin-vantage',
    name: 'Vantage',
    year: 2023,
    manufacturerId: 'aston-martin',
    countryId: 'uk',
    description: 'A heart-pounding sports car with a predator\'s stance and a twin-turbo V8.',
    history: 'The Vantage name has been used by Aston Martin since 1950. The current generation uses a 4.0L AMG-sourced twin-turbo V8 and has shed 190 kg over its predecessor.',
    specs: { engine: '4.0L Twin-Turbo V8', power: '503 hp', topSpeed: '195 mph', zeroToSixty: '3.6s' },
    modelUrl: glb(3),
    image: 'https://images.unsplash.com/photo-1603584173870-7f3ca9f094ec?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mclaren-p1',
    name: 'P1',
    year: 2014,
    manufacturerId: 'mclaren',
    countryId: 'uk',
    description: 'The hybrid hypercar that rebooted the supercar arms race. 903 hp, 7 seconds around the Nürburgring.',
    history: 'The P1 was McLaren\'s answer to the Ferrari LaFerrari and Porsche 918. Just 375 were built. Its Formula One-inspired DRS and IPAS systems are unlike anything else on the road.',
    specs: { engine: '3.8L Twin-Turbo V8 + Electric', power: '903 hp', topSpeed: '217 mph', zeroToSixty: '2.8s' },
    modelUrl: glb(4),
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'rolls-royce-phantom',
    name: 'Phantom Series II',
    year: 2023,
    manufacturerId: 'rolls-royce',
    countryId: 'uk',
    description: 'The pinnacle of luxury motoring — hand-built in Goodwood for those who have everything.',
    history: 'The Phantom name dates to 1925. The eighth generation rides on an all-aluminum spaceframe and is the first Phantom with a twin-turbo V12. Each one takes 4–6 months to build.',
    specs: { engine: '6.75L Twin-Turbo V12', power: '563 hp', topSpeed: '155 mph', zeroToSixty: '5.1s' },
    modelUrl: glb(5),
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bentley-continental-gt',
    name: 'Continental GT Speed',
    year: 2022,
    manufacturerId: 'bentley',
    countryId: 'uk',
    description: 'The grand tourer redefined — 659 hp W12, hand-stitched leather, and effortless 208 mph.',
    history: 'The Continental GT debuted in 2003 and became Bentley\'s best-seller. The Speed variant uses a 6.0L twin-turbo W12 producing 659 hp — the most powerful Bentley engine ever.',
    specs: { engine: '6.0L Twin-Turbo W12', power: '659 hp', topSpeed: '208 mph', zeroToSixty: '3.5s' },
    modelUrl: glb(0),
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'jaguar-f-type-r',
    name: 'F-Type R',
    year: 2022,
    manufacturerId: 'jaguar',
    countryId: 'uk',
    description: 'Britain\'s sports car — a supercharged V8 with one of the most theatrical exhausts in the business.',
    history: 'The F-Type debuted in 2013 as the spiritual successor to the E-Type. The R variant\'s supercharged V8 produces a spine-tingling exhaust note that activates on overrun.',
    specs: { engine: '5.0L Supercharged V8', power: '575 hp', topSpeed: '186 mph', zeroToSixty: '3.5s' },
    modelUrl: glb(1),
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'lotus-evija',
    name: 'Evija',
    year: 2023,
    manufacturerId: 'lotus',
    countryId: 'uk',
    description: 'Britain\'s first all-electric hypercar — 2,000 hp and a 0–186 mph time of under 9 seconds.',
    history: 'The Evija (meaning "the first in existence") is Lotus\'s most powerful road car ever. Its battery pack delivers 2,000 hp through four electric motors, one per wheel.',
    specs: { engine: 'Quad Electric Motors', power: '2,000 hp', topSpeed: '200+ mph', zeroToSixty: '2.8s' },
    modelUrl: glb(2),
    image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=800'
  },

  // ── France ──────────────────────────────────────────────
  {
    id: 'bugatti-chiron',
    name: 'Chiron Super Sport',
    year: 2022,
    manufacturerId: 'bugatti',
    countryId: 'france',
    description: 'The fastest, most powerful, and exclusive production super sports car in Bugatti\'s history.',
    history: 'The Chiron is named after the Monegasque driver Louis Chiron. In 2019 a pre-production Chiron became the first road car to exceed 300 mph (304.77 mph).',
    specs: { engine: '8.0L Quad-Turbo W16', power: '1,578 hp', topSpeed: '273 mph', zeroToSixty: '2.4s' },
    modelUrl: glb(3),
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'alpine-a110',
    name: 'A110 R',
    year: 2023,
    manufacturerId: 'alpine',
    countryId: 'france',
    description: 'The French art of lightness — 34 kg lighter than the standard A110, focused purely on the driver.',
    history: 'The A110 R is the most extreme version of Alpine\'s acclaimed sports car, shedding weight everywhere including carbon bucket seats, a Lexan rear window, and a titanium exhaust.',
    specs: { engine: '1.8L Turbo Inline-4', power: '300 hp', topSpeed: '177 mph', zeroToSixty: '3.9s' },
    modelUrl: glb(4),
    image: 'https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'renault-megane-rs',
    name: 'Mégane RS Trophy-R',
    year: 2020,
    manufacturerId: 'renault',
    countryId: 'france',
    description: 'The front-wheel-drive Nürburgring king — set an 8:07 lap record for production FWD cars.',
    history: 'The Trophy-R set its Nürburgring record in 2019, beating the Honda Civic Type R by 23 seconds. Its Akrapovič titanium exhaust saves 6 kg over the standard Trophy.',
    specs: { engine: '1.8L Turbo Inline-4', power: '300 hp', topSpeed: '163 mph', zeroToSixty: '5.4s' },
    modelUrl: glb(5),
    image: 'https://images.unsplash.com/photo-1541443131876-96f1aa89e98d?auto=format&fit=crop&q=80&w=800'
  },

  // ── Sweden ──────────────────────────────────────────────
  {
    id: 'koenigsegg-jesko',
    name: 'Jesko Absolut',
    year: 2023,
    manufacturerId: 'koenigsegg',
    countryId: 'sweden',
    description: 'Designed to be the fastest Koenigsegg ever made, and potentially the fastest car in the world.',
    history: 'Named after Jesko von Koenigsegg, the founder\'s father. The Absolut variant removes the race wing for minimum drag. Its theoretical top speed exceeds 330 mph.',
    specs: { engine: '5.0L Twin-Turbo V8', power: '1,600 hp', topSpeed: '330 mph (est.)', zeroToSixty: '2.5s' },
    modelUrl: glb(0),
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'volvo-p1800',
    name: 'P1800 Cyan',
    year: 2023,
    manufacturerId: 'volvo',
    countryId: 'sweden',
    description: 'A reimagined 1960s Swedish icon — modern drivetrain, vintage soul, limited to 25 units worldwide.',
    history: 'The Cyan P1800 is built by Polestar\'s predecessor Cyan Racing on original P1800 bodyshells, updated with a 2.0T engine producing 420 hp in a car weighing just 1,100 kg.',
    specs: { engine: '2.0L Turbo Inline-4', power: '420 hp', topSpeed: '155 mph', zeroToSixty: '3.9s' },
    modelUrl: glb(1),
    image: 'https://images.unsplash.com/photo-1563720223809-b4e90a04ea6e?auto=format&fit=crop&q=80&w=800'
  },

  // ── South Korea ──────────────────────────────────────────────
  {
    id: 'hyundai-ioniq5-n',
    name: 'IONIQ 5 N',
    year: 2024,
    manufacturerId: 'hyundai',
    countryId: 'south-korea',
    description: 'The world\'s most driver-focused electric hot hatch — with simulated gear shifts and engine sounds.',
    history: 'Developed by Hyundai\'s N performance division, the IONIQ 5 N uses the same platform as the Kia EV6 GT and features N e-shift to simulate a DCT transmission in an EV.',
    specs: { engine: 'Dual Motor AWD Electric', power: '641 hp', topSpeed: '161 mph', zeroToSixty: '3.4s' },
    modelUrl: glb(2),
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'kia-ev6-gt',
    name: 'EV6 GT',
    year: 2023,
    manufacturerId: 'kia',
    countryId: 'south-korea',
    description: 'Korea\'s electric rocket — 577 hp and a 0–60 time that beats most sports cars.',
    history: 'The EV6 GT is Kia\'s first performance EV, sharing its 800V architecture with the IONIQ 5. It can charge from 10–80% in just 18 minutes on a 350 kW charger.',
    specs: { engine: 'Dual Motor AWD Electric', power: '577 hp', topSpeed: '161 mph', zeroToSixty: '3.4s' },
    modelUrl: glb(3),
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'genesis-gv80',
    name: 'GV80 Coupe',
    year: 2024,
    manufacturerId: 'genesis',
    countryId: 'south-korea',
    description: 'A bold Korean luxury statement — dramatic coupe roofline meets athletic twin-turbo V6.',
    history: 'The GV80 Coupe is Genesis\'s most distinctive model, blending the luxury SUV formula with a sloped fastback roofline. It signals Korea\'s arrival as a true luxury automotive nation.',
    specs: { engine: '3.5L Twin-Turbo V6', power: '375 hp', topSpeed: '149 mph', zeroToSixty: '5.1s' },
    modelUrl: glb(4),
    image: 'https://images.unsplash.com/photo-1599912027611-484b9fc447af?auto=format&fit=crop&q=80&w=800'
  },

  // ── Croatia ──────────────────────────────────────────────
  {
    id: 'rimac-nevera',
    name: 'Nevera',
    year: 2022,
    manufacturerId: 'rimac',
    countryId: 'croatia',
    description: 'The ultimate electric hypercar, pushing the boundaries of performance and technology.',
    history: 'Nevera is named after a sudden Mediterranean storm. It holds 23 performance world records including the fastest 0–60 ever recorded for a production car at 1.85 seconds.',
    specs: { engine: 'Quad Electric Motors', power: '1,914 hp', topSpeed: '258 mph', zeroToSixty: '1.85s' },
    modelUrl: glb(5),
    image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=800'
  },

  // ── Netherlands ──────────────────────────────────────────────
  {
    id: 'spyker-c8',
    name: 'C8 Preliator',
    year: 2018,
    manufacturerId: 'spyker',
    countryId: 'netherlands',
    description: 'Aviation-inspired bespoke supercar — every component a piece of functional art.',
    history: 'The Spyker C8 Preliator features a fully exposed gearshift gate machined from solid aluminum, aviation-style toggle switches, and a naturally aspirated Audi V8 mounted mid-ship.',
    specs: { engine: '4.2L Naturally Aspirated V8', power: '525 hp', topSpeed: '186 mph', zeroToSixty: '3.8s' },
    modelUrl: glb(0),
    image: 'https://images.unsplash.com/photo-1563720223809-b4e90a04ea6e?auto=format&fit=crop&q=80&w=800'
  },

  // ── India ──────────────────────────────────────────────
  {
    id: 'tata-nexon-ev',
    name: 'Nexon EV Max',
    year: 2023,
    manufacturerId: 'tata',
    countryId: 'india',
    description: 'India\'s best-selling electric SUV — affordable, practical, and built for Indian roads.',
    history: 'The Nexon EV has been India\'s top-selling electric vehicle since its 2020 launch. The Max variant extends range to 437 km and adds a fast-charge capability.',
    specs: { engine: 'Permanent Magnet AC Motor', power: '143 hp', topSpeed: '120 mph', zeroToSixty: '9.0s' },
    modelUrl: glb(1),
    image: 'https://images.unsplash.com/photo-1604054923029-ed91f0d47e29?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mahindra-thar',
    name: 'Thar Roxx',
    year: 2024,
    manufacturerId: 'mahindra',
    countryId: 'india',
    description: 'India\'s iconic off-roader — body-on-frame, four-wheel drive, and now available as a 5-door SUV.',
    history: 'The Thar traces its lineage to the Jeep CJ3 assembled by Mahindra under license in 1947. The Roxx is the most capable and feature-rich Thar ever built.',
    specs: { engine: '2.0L mStallion Turbo Petrol', power: '175 hp', topSpeed: '112 mph', zeroToSixty: '8.5s' },
    modelUrl: glb(2),
    image: 'https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?auto=format&fit=crop&q=80&w=800'
  },

  // ── China ──────────────────────────────────────────────
  {
    id: 'byd-han-ev',
    name: 'Han EV',
    year: 2023,
    manufacturerId: 'byd',
    countryId: 'china',
    description: 'China\'s electric flagship — 715 km range, AWD, and a Blade Battery that won\'t burn.',
    history: 'The BYD Han launched in 2020 and became China\'s best-selling premium EV. Its proprietary Blade Battery passed nail penetration tests without catching fire, setting a new safety standard.',
    specs: { engine: 'Dual Motor AWD Electric', power: '536 hp', topSpeed: '155 mph', zeroToSixty: '3.9s' },
    modelUrl: glb(3),
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'nio-et7',
    name: 'ET7',
    year: 2023,
    manufacturerId: 'nio',
    countryId: 'china',
    description: 'China\'s answer to the Tesla Model S — with a swappable battery and 150 kWh solid-state option.',
    history: 'The ET7 is NIO\'s flagship sedan, offering battery-swap capability that fully charges the car in under 5 minutes. The 150 kWh semi-solid-state battery pack offers over 1,000 km of range.',
    specs: { engine: 'Dual Motor AWD Electric', power: '644 hp', topSpeed: '155 mph', zeroToSixty: '3.8s' },
    modelUrl: glb(4),
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800'
  },

  // ── Australia ──────────────────────────────────────────────
  {
    id: 'holden-gts',
    name: 'Commodore GTS-R W1',
    year: 2017,
    manufacturerId: 'holden',
    countryId: 'australia',
    description: 'The most powerful Australian production car ever built — a 474 kW (635 hp) supercharged V8.',
    history: 'The VFII GTS-R W1 was the last performance Holden built before production ended in 2017. Only 300 were made. It used the same LS9 supercharged V8 as the Chevrolet Corvette ZR1.',
    specs: { engine: '6.2L Supercharged LS9 V8', power: '635 hp', topSpeed: '186 mph', zeroToSixty: '3.9s' },
    modelUrl: glb(5),
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800'
  },

  // ── Spain ──────────────────────────────────────────────
  {
    id: 'cupra-formentor-vz5',
    name: 'Formentor VZ5',
    year: 2022,
    manufacturerId: 'cupra',
    countryId: 'spain',
    description: 'Spain\'s wildest road car — a 390 hp five-cylinder Audi engine dropped into a compact SUV.',
    history: 'The Formentor VZ5 uses the Audi RS3\'s turbocharged 2.5L five-cylinder engine — one of the most characterful units in the VW Group — making it the most powerful production CUPRA ever.',
    specs: { engine: '2.5L Turbo Inline-5 (Audi)', power: '390 hp', topSpeed: '155 mph', zeroToSixty: '4.2s' },
    modelUrl: glb(0),
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'seat-leon-cupra-r',
    name: 'León CUPRA R',
    year: 2020,
    manufacturerId: 'seat',
    countryId: 'spain',
    description: 'The most focused performance SEAT ever — front-wheel drive, 310 hp, and a limited-slip diff.',
    history: 'The León CUPRA R was the final car sold under the SEAT CUPRA banner before CUPRA spun off as its own brand. Just 799 units were built for the most demanding drivers.',
    specs: { engine: '2.0L TSI Turbo Inline-4', power: '310 hp', topSpeed: '155 mph', zeroToSixty: '4.9s' },
    modelUrl: glb(1),
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800'
  },

  // ── Czech Republic ──────────────────────────────────────────────
  {
    id: 'skoda-octavia-rs',
    name: 'Octavia RS',
    year: 2023,
    manufacturerId: 'skoda',
    countryId: 'czech-republic',
    description: 'Europe\'s most practical performance car — a spacious wagon with a 245 hp turbo and sharp chassis.',
    history: 'The Octavia RS is one of the longest-running performance nameplates in Europe. The estate (Combi) RS variant combines Nürburgring-tested handling with family-car practicality.',
    specs: { engine: '2.0L TSI Turbo Inline-4', power: '245 hp', topSpeed: '155 mph', zeroToSixty: '6.4s' },
    modelUrl: glb(2),
    image: 'https://images.unsplash.com/photo-1604054923029-ed91f0d47e29?auto=format&fit=crop&q=80&w=800'
  },

  // ── UAE ──────────────────────────────────────────────
  {
    id: 'w-motors-lykan',
    name: 'Lykan HyperSport',
    year: 2014,
    manufacturerId: 'w-motors',
    countryId: 'uae',
    description: 'The Arab world\'s first supercar — diamonds in the headlights and a $3.4 million price tag.',
    history: 'The Lykan HyperSport is one of the rarest cars ever made — only 7 units built. Its headlights are encrusted with 420 diamonds. It famously jumped between skyscrapers in Fast & Furious 7.',
    specs: { engine: '3.7L Twin-Turbo Flat-6 (RUF)', power: '780 hp', topSpeed: '245 mph', zeroToSixty: '2.8s' },
    modelUrl: glb(3),
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800'
  },

  // ── Russia ──────────────────────────────────────────────
  {
    id: 'lada-niva',
    name: 'Niva Legend',
    year: 2023,
    manufacturerId: 'lada',
    countryId: 'russia',
    description: 'The indestructible Soviet off-roader that conquered the Sahara, the Arctic, and the Paris-Dakar rally.',
    history: 'The original Niva launched in 1977 as the world\'s first unibody 4WD with independent front suspension. It has outlasted the Soviet Union and remains in production today under the Niva Legend name.',
    specs: { engine: '1.7L Inline-4', power: '83 hp', topSpeed: '90 mph', zeroToSixty: '17.0s' },
    modelUrl: glb(4),
    image: 'https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?auto=format&fit=crop&q=80&w=800'
  },

  // ── Vietnam ──────────────────────────────────────────────
  {
    id: 'vinfast-vf8',
    name: 'VF 8',
    year: 2023,
    manufacturerId: 'vinfast',
    countryId: 'vietnam',
    description: 'Vietnam\'s electric SUV going global — sold across the USA, Canada, and Europe.',
    history: 'The VF 8 is VinFast\'s first global model, exported from its Haiphong factory to North America and Europe in 2023. It signals Vietnam\'s emergence as an automotive exporting nation.',
    specs: { engine: 'Dual Motor AWD Electric', power: '402 hp', topSpeed: '121 mph', zeroToSixty: '5.5s' },
    modelUrl: glb(5),
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800'
  },

  // ── Turkey ──────────────────────────────────────────────
  {
    id: 'togg-t10x',
    name: 'T10X',
    year: 2023,
    manufacturerId: 'togg',
    countryId: 'turkey',
    description: 'Turkey\'s first homegrown electric SUV — a national milestone in the country\'s industrial history.',
    history: 'The T10X began deliveries in Turkey in 2023 from a purpose-built factory in Bursa. It is 100% Turkish-designed and engineered, backed by Turkey\'s largest industrial companies.',
    specs: { engine: 'Single Rear Motor Electric', power: '200 hp', topSpeed: '130 mph', zeroToSixty: '7.6s' },
    modelUrl: glb(0),
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800'
  },

  // ── Switzerland ──────────────────────────────────────────────
  {
    id: 'rinspeed-etos',
    name: 'Etos Concept',
    year: 2016,
    manufacturerId: 'rinspeed',
    countryId: 'switzerland',
    description: 'A self-driving Tesla-based concept with a built-in drone dock — Swiss precision meets sci-fi.',
    history: 'The Rinspeed Etos was unveiled at the 2016 Geneva Motor Show, built on a Tesla Model S platform. It features a roof-mounted drone landing pad and a fully autonomous interior with a fold-out desk.',
    specs: { engine: 'Tesla Dual Motor AWD', power: '762 hp', topSpeed: '155 mph', zeroToSixty: '3.1s' },
    modelUrl: glb(2),
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800'
  },

  // ── Mexico ──────────────────────────────────────────────
  {
    id: 'mastretta-mxt',
    name: 'MXT',
    year: 2013,
    manufacturerId: 'mastretta',
    countryId: 'mexico',
    description: 'Mexico\'s homegrown sports car — lightweight, turbocharged, and built for mountain roads.',
    history: 'The Mastretta MXT is the first car designed, developed, and manufactured entirely in Mexico. Weighing just 700 kg, its turbocharged Ford engine delivers a thrilling power-to-weight ratio.',
    specs: { engine: '2.0L Turbo Inline-4 (Ford)', power: '220 hp', topSpeed: '143 mph', zeroToSixty: '5.9s' },
    modelUrl: glb(3),
    image: 'https://images.unsplash.com/photo-1563720223809-b4e90a04ea6e?auto=format&fit=crop&q=80&w=800'
  },

  // ── Brazil ──────────────────────────────────────────────
  {
    id: 'puma-gts',
    name: 'GTS',
    year: 1985,
    manufacturerId: 'puma',
    countryId: 'brazil',
    description: 'Brazil\'s most beloved sports car — a sleek fiberglass coupe with a soul from the 1970s.',
    history: 'The Puma GTS was built on Volkswagen Beetle and later VW 1600 platforms with a hand-laid fiberglass body. Its elegant Italian-influenced styling made it a symbol of Brazilian automotive pride.',
    specs: { engine: '1.6L Flat-4 (VW)', power: '65 hp', topSpeed: '108 mph', zeroToSixty: '12.0s' },
    modelUrl: glb(4),
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800'
  },

  // ── Canada ──────────────────────────────────────────────
  {
    id: 'brp-can-am-ryker',
    name: 'Can-Am Ryker',
    year: 2023,
    manufacturerId: 'brp',
    countryId: 'canada',
    description: 'Canada\'s three-wheeled road rocket — between a motorcycle and a sports car.',
    history: 'The Can-Am Ryker launched in 2019 as BRP\'s entry-level 3-wheel vehicle. Its Y-frame chassis and aggressive styling attracted a new generation of riders who never owned a motorcycle.',
    specs: { engine: '900cc ACE Turbo', power: '82 hp', topSpeed: '100 mph', zeroToSixty: '5.0s' },
    modelUrl: glb(5),
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80&w=800'
  },

  // ── Poland ──────────────────────────────────────────────
  {
    id: 'arrinera-hussarya',
    name: 'Hussarya GT',
    year: 2020,
    manufacturerId: 'arrinera',
    countryId: 'poland',
    description: 'Poland\'s first supercar — 650 hp, carbon fiber, and named after the legendary Polish winged hussars.',
    history: 'The Arrinera Hussarya GT is a track-focused supercar built in Warsaw with a mid-mounted LS7 V8. Named after the Hussars — the elite Polish cavalry — it is a symbol of Polish engineering ambition.',
    specs: { engine: '7.0L LS7 V8 (GM)', power: '650 hp', topSpeed: '211 mph', zeroToSixty: '3.2s' },
    modelUrl: glb(0),
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800'
  },

  // ── Romania ──────────────────────────────────────────────
  {
    id: 'dacia-sandero',
    name: 'Sandero Stepway',
    year: 2023,
    manufacturerId: 'dacia',
    countryId: 'romania',
    description: 'Europe\'s best-value new car — honest, practical, and unbeatable on price.',
    history: 'The Sandero has been Europe\'s best-selling new car to private buyers for three consecutive years. The Stepway adds SUV styling with raised ride height, all for under €15,000.',
    specs: { engine: '1.0L TCe Turbo Inline-3', power: '90 hp', topSpeed: '109 mph', zeroToSixty: '11.9s' },
    modelUrl: glb(1),
    image: 'https://images.unsplash.com/photo-1541443131876-96f1aa89e98d?auto=format&fit=crop&q=80&w=800'
  },
];
