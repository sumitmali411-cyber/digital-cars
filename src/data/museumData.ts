import { Car, Manufacturer, Country } from '../types';

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
    automotiveHeritage: 'Japan introduced the world to lean manufacturing and the legendary JDM (Japanese Domestic Market) culture.'
  },
  {
    id: 'usa',
    name: 'USA',
    flag: '🇺🇸',
    description: 'Home of the muscle car and the spirit of the open road.',
    history: 'The USA revolutionized car production with the assembly line, making automobiles accessible to the masses.',
    automotiveHeritage: 'The land of V8 muscle, Route 66, and the innovation of companies like Ford and Tesla.'
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    description: 'Elegance, luxury, and a deep-rooted history in motorsport.',
    history: 'The UK was a pioneer in the early 20th century, creating some of the most prestigious luxury brands.',
    automotiveHeritage: 'Home to Aston Martin, McLaren, and Rolls-Royce, the UK blends tradition with high-performance engineering.'
  },
  {
    id: 'france',
    name: 'France',
    flag: '🇫🇷',
    description: 'Innovation, avant-garde design, and the pinnacle of luxury.',
    history: 'France was an early leader in automotive development, with brands like Bugatti setting speed records in the 1920s.',
    automotiveHeritage: 'From the ultra-luxurious Bugatti to the quirky Citroën, French cars are always distinctive.'
  },
  {
    id: 'sweden',
    name: 'Sweden',
    flag: '🇸🇪',
    description: 'Safety, sustainability, and extreme hypercars.',
    history: 'Swedish automotive history is defined by a focus on safety and durability in harsh climates.',
    automotiveHeritage: 'Volvo pioneered safety features, while Koenigsegg redefined what is possible in a hypercar.'
  },
  {
    id: 'south-korea',
    name: 'South Korea',
    flag: '🇰🇷',
    description: 'Rapid innovation and high-tech value.',
    history: 'South Korea transformed from a developing nation to a global automotive powerhouse in just a few decades.',
    automotiveHeritage: 'Hyundai and Kia have become leaders in electric vehicles and modern design.'
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
    automotiveHeritage: 'Spyker is known for its aviation-inspired interiors and unique styling.'
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
    automotiveHeritage: 'Brands like BYD and NIO are at the forefront of the EV revolution.'
  },
  {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    description: 'Rugged performance and the "Ute" culture.',
    history: 'Australia developed a unique car culture suited to its vast and varied landscape.',
    automotiveHeritage: 'Holden and Ford Australia created legendary muscle cars and utility vehicles.'
  },
  {
    id: 'spain',
    name: 'Spain',
    flag: '🇪🇸',
    description: 'Sporty design and Mediterranean flair.',
    history: 'Spain has a strong manufacturing base and a history of producing accessible, sporty cars.',
    automotiveHeritage: 'SEAT and Cupra are the primary representatives of Spanish automotive passion.'
  },
  {
    id: 'czech-republic',
    name: 'Czech Republic',
    flag: '🇨🇿',
    description: 'Practicality and clever engineering.',
    history: 'One of the oldest automotive industries in the world, with a focus on value and smart features.',
    automotiveHeritage: 'Škoda is one of the world\'s oldest car manufacturers still in operation.'
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    flag: '🇨🇭',
    description: 'Precision and experimental concepts.',
    history: 'While not a mass producer, Switzerland is home to innovative design houses.',
    automotiveHeritage: 'Rinspeed is famous for its wild and futuristic concept cars.'
  },
  {
    id: 'uae',
    name: 'UAE',
    flag: '🇦🇪',
    description: 'Extravagant luxury and extreme speed.',
    history: 'The UAE has recently entered the manufacturing scene with ultra-exclusive hypercars.',
    automotiveHeritage: 'W Motors created the Lykan HyperSport, one of the most expensive cars ever made.'
  },
  {
    id: 'mexico',
    name: 'Mexico',
    flag: '🇲🇽',
    description: 'Lightweight performance and manufacturing hub.',
    history: 'Mexico is a major global manufacturing hub and has begun developing its own sports cars.',
    automotiveHeritage: 'Mastretta is Mexico\'s first major sports car manufacturer.'
  },
  {
    id: 'brazil',
    name: 'Brazil',
    flag: '🇧🇷',
    description: 'Unique local adaptations and sports cars.',
    history: 'Brazil has a history of creating unique versions of global cars and its own niche sports cars.',
    automotiveHeritage: 'Puma was a legendary Brazilian sports car brand in the 70s and 80s.'
  },
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    description: 'Advanced manufacturing and specialized vehicles.',
    history: 'Canada is a key part of the North American automotive industry.',
    automotiveHeritage: 'Magna International is one of the world\'s largest automotive suppliers.'
  },
  {
    id: 'russia',
    name: 'Russia',
    flag: '🇷🇺',
    description: 'Ruggedness and utility.',
    history: 'Russian cars are built to survive some of the harshest conditions on Earth.',
    automotiveHeritage: 'Lada and UAZ are known for their simplicity and off-road capability.'
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    flag: '🇻🇳',
    description: 'Emerging electric powerhouse.',
    history: 'Vietnam is the newest major player in the global automotive industry.',
    automotiveHeritage: 'VinFast is rapidly expanding its electric vehicle lineup globally.'
  },
  {
    id: 'turkey',
    name: 'Turkey',
    flag: '🇹🇷',
    description: 'Modern electric mobility.',
    history: 'Turkey has long been a manufacturing hub and is now launching its own national EV brand.',
    automotiveHeritage: 'Togg is the first Turkish-designed electric vehicle brand.'
  },
  {
    id: 'romania',
    name: 'Romania',
    flag: '🇷🇴',
    description: 'Unbeatable value and robustness.',
    history: 'Romania produces some of the most affordable and reliable cars in Europe.',
    automotiveHeritage: 'Dacia has become a massive success story across the continent.'
  },
  {
    id: 'poland',
    name: 'Poland',
    flag: '🇵🇱',
    description: 'Resurgent engineering and supercars.',
    history: 'Poland has a long history of car manufacturing that is seeing a modern revival.',
    automotiveHeritage: 'Arrinera is Poland\'s first supercar manufacturer.'
  }
];

export const manufacturers: Manufacturer[] = [
  {
    id: 'porsche',
    name: 'Porsche',
    countryId: 'germany',
    logo: 'https://logo.clearbit.com/porsche.com',
    history: 'Founded in 1931 by Ferdinand Porsche, the company initially offered motor vehicle development work and consulting.',
    timeline: [
      { year: 1931, event: 'Founded by Ferdinand Porsche' },
      { year: 1948, event: 'First Porsche 356 produced' },
      { year: 1963, event: 'Introduction of the iconic 911' },
      { year: 2002, event: 'Launch of the Cayenne SUV' },
      { year: 2019, event: 'Taycan, the first all-electric Porsche, debuts' }
    ]
  },
  {
    id: 'bmw',
    name: 'BMW',
    countryId: 'germany',
    logo: 'https://logo.clearbit.com/bmw.com',
    history: 'Bayerische Motoren Werke AG, commonly referred to as BMW, was founded in 1916 as a manufacturer of aircraft engines.',
    timeline: [
      { year: 1916, event: 'Founded as an aircraft engine manufacturer' },
      { year: 1928, event: 'Began automobile production' },
      { year: 1972, event: 'BMW M division established' },
      { year: 1999, event: 'Launch of the X5, entering the SUV market' },
      { year: 2013, event: 'Introduction of the i3 electric car' }
    ]
  },
  {
    id: 'mercedes',
    name: 'Mercedes-Benz',
    countryId: 'germany',
    logo: 'https://logo.clearbit.com/mercedes-benz.com',
    history: 'The brand traces its origins to Karl Benz\'s creation of the first internal combustion engine in a car, the Benz Patent Motorwagen.',
    timeline: [
      { year: 1886, event: 'Karl Benz patents the Motorwagen' },
      { year: 1926, event: 'Daimler and Benz merge to form Mercedes-Benz' },
      { year: 1954, event: 'Introduction of the iconic 300 SL Gullwing' },
      { year: 1997, event: 'Launch of the M-Class SUV' },
      { year: 2019, event: 'EQC launched, marking the start of the EQ electric sub-brand' }
    ]
  },
  {
    id: 'ferrari',
    name: 'Ferrari',
    countryId: 'italy',
    logo: 'https://logo.clearbit.com/ferrari.com',
    history: 'Founded by Enzo Ferrari in 1939 out of Alfa Romeo\'s race division as Auto Avio Costruzioni.',
    timeline: [
      { year: 1939, event: 'Founded by Enzo Ferrari' },
      { year: 1947, event: 'First Ferrari-badged car, the 125 S, produced' },
      { year: 1987, event: 'Launch of the legendary F40' },
      { year: 2002, event: 'Enzo Ferrari supercar introduced' },
      { year: 2022, event: 'Purosangue, Ferrari\'s first SUV, unveiled' }
    ]
  },
  {
    id: 'lamborghini',
    name: 'Lamborghini',
    countryId: 'italy',
    logo: 'https://logo.clearbit.com/lamborghini.com',
    history: 'Founded in 1963 by Ferruccio Lamborghini, the company is known for its luxury sports cars and SUVs.',
    timeline: [
      { year: 1963, event: 'Founded by Ferruccio Lamborghini' },
      { year: 1966, event: 'Miura introduced, establishing the mid-engine supercar layout' },
      { year: 1974, event: 'Countach debuts with iconic wedge design' },
      { year: 1998, event: 'Acquired by the Volkswagen Group' },
      { year: 2017, event: 'Urus SUV launched' }
    ]
  },
  {
    id: 'maserati',
    name: 'Maserati',
    countryId: 'italy',
    logo: 'https://logo.clearbit.com/maserati.com',
    history: 'Founded in 1914 in Bologna, Italy, the Maserati brothers were involved in racing from the beginning.',
    timeline: [
      { year: 1914, event: 'Founded by the Maserati brothers' },
      { year: 1926, event: 'First Maserati car, the Tipo 26, wins its class at Targa Florio' },
      { year: 1957, event: 'Juan Manuel Fangio wins F1 World Championship in a Maserati 250F' },
      { year: 1993, event: 'Acquired by Fiat' },
      { year: 2020, event: 'MC20 supercar introduced, marking a new era' }
    ]
  },
  {
    id: 'toyota',
    name: 'Toyota',
    countryId: 'japan',
    logo: 'https://logo.clearbit.com/toyota.com',
    history: 'Started as a division of Toyoda Automatic Loom Works, Toyota has grown into one of the largest automakers in the world.',
    timeline: [
      { year: 1937, event: 'Toyota Motor Corporation established' },
      { year: 1966, event: 'Corolla introduced, becoming the best-selling car globally' },
      { year: 1989, event: 'Lexus luxury division launched' },
      { year: 1997, event: 'Prius, the first mass-produced hybrid, debuts' },
      { year: 2021, event: 'Announces major shift towards battery electric vehicles' }
    ]
  },
  {
    id: 'nissan',
    name: 'Nissan',
    countryId: 'japan',
    logo: 'https://logo.clearbit.com/nissan-global.com',
    history: 'Nissan\'s origins date back to the Kwaishinsha Motor Car Works, established in 1911.',
    timeline: [
      { year: 1933, event: 'Nissan Motor Co., Ltd. established' },
      { year: 1969, event: 'Datsun 240Z introduced, popularizing Japanese sports cars' },
      { year: 1989, event: 'Skyline GT-R (R32) dominates motorsport' },
      { year: 1999, event: 'Renault-Nissan Alliance formed' },
      { year: 2010, event: 'Leaf, the first mass-market EV, launched' }
    ]
  },
  {
    id: 'tesla',
    name: 'Tesla',
    countryId: 'usa',
    logo: 'https://logo.clearbit.com/tesla.com',
    history: 'Founded in 2003, Tesla is an American electric vehicle and clean energy company based in Austin, Texas.',
    timeline: [
      { year: 2003, event: 'Tesla Motors founded' },
      { year: 2008, event: 'Roadster, the first production EV with lithium-ion cells, released' },
      { year: 2012, event: 'Model S luxury sedan launched' },
      { year: 2017, event: 'Model 3 introduced for the mass market' },
      { year: 2023, event: 'Cybertruck deliveries begin' }
    ]
  },
  {
    id: 'ford',
    name: 'Ford',
    countryId: 'usa',
    logo: 'https://logo.clearbit.com/ford.com',
    history: 'Founded by Henry Ford in 1903, Ford introduced methods for large-scale manufacturing of cars.',
    timeline: [
      { year: 1903, event: 'Ford Motor Company incorporated' },
      { year: 1908, event: 'Model T introduced, making cars affordable' },
      { year: 1913, event: 'First moving assembly line implemented' },
      { year: 1964, event: 'Mustang launched, creating the "pony car" class' },
      { year: 2021, event: 'Mustang Mach-E and F-150 Lightning EVs introduced' }
    ]
  },
  {
    id: 'chevrolet',
    name: 'Chevrolet',
    countryId: 'usa',
    logo: 'https://logo.clearbit.com/chevrolet.com',
    history: 'Founded in 1911 by Louis Chevrolet and William C. Durant, Chevrolet is the core brand of General Motors.',
    timeline: [
      { year: 1911, event: 'Chevrolet Motor Car Company founded' },
      { year: 1918, event: 'Acquired by General Motors' },
      { year: 1953, event: 'Corvette sports car introduced' },
      { year: 1966, event: 'Camaro launched to compete with the Mustang' },
      { year: 2020, event: 'First mid-engine Corvette (C8) released' }
    ]
  },
  {
    id: 'aston-martin',
    name: 'Aston Martin',
    countryId: 'uk',
    logo: 'https://logo.clearbit.com/astonmartin.com',
    history: 'Founded in 1913 by Lionel Martin and Robert Bamford, Aston Martin is an iconic British luxury sports car brand.',
    timeline: [
      { year: 1913, event: 'Founded by Lionel Martin and Robert Bamford' },
      { year: 1947, event: 'David Brown acquires the company (origin of "DB" models)' },
      { year: 1964, event: 'DB5 featured in James Bond film Goldfinger' },
      { year: 2020, event: 'DBX, the brand\'s first SUV, launched' },
      { year: 2021, event: 'Returns to Formula 1 as a factory team' }
    ]
  },
  {
    id: 'mclaren',
    name: 'McLaren',
    countryId: 'uk',
    logo: 'https://logo.clearbit.com/mclaren.com',
    history: 'Founded in 1963 by Bruce McLaren, the company is a pioneer in carbon fiber technology and Formula 1 racing.',
    timeline: [
      { year: 1963, event: 'Bruce McLaren Motor Racing founded' },
      { year: 1992, event: 'McLaren F1 road car sets speed records' },
      { year: 2010, event: 'McLaren Automotive established for production cars' },
      { year: 2013, event: 'P1 hybrid hypercar introduced' },
      { year: 2021, event: 'Artura, the first high-performance hybrid, launched' }
    ]
  },
  {
    id: 'bugatti',
    name: 'Bugatti',
    countryId: 'france',
    logo: 'https://logo.clearbit.com/bugatti.com',
    history: 'Founded in 1909 by Ettore Bugatti, the brand is famous for high-performance automobiles and artistic design.',
    timeline: [
      { year: 1909, event: 'Automobiles Ettore Bugatti founded' },
      { year: 1924, event: 'Type 35 becomes the most successful racing car ever' },
      { year: 1998, event: 'Volkswagen Group acquires the rights to the brand' },
      { year: 2005, event: 'Veyron 16.4 becomes the first production car to exceed 250 mph' },
      { year: 2021, event: 'Bugatti Rimac joint venture formed' }
    ]
  },
  {
    id: 'koenigsegg',
    name: 'Koenigsegg',
    countryId: 'sweden',
    logo: 'https://logo.clearbit.com/koenigsegg.com',
    history: 'Founded in 1994 by Christian von Koenigsegg, the company produces world-record-breaking hypercars.',
    timeline: [
      { year: 1994, event: 'Koenigsegg Automotive AB founded' },
      { year: 2002, event: 'CC8S, the first production car, delivered' },
      { year: 2010, event: 'Agera introduced' },
      { year: 2015, event: 'Regera hybrid hypercar features Direct Drive system' },
      { year: 2020, event: 'Gemera, the first four-seater "Mega-GT", unveiled' }
    ]
  },
  {
    id: 'rimac',
    name: 'Rimac',
    countryId: 'croatia',
    logo: 'https://logo.clearbit.com/rimac-automobili.com',
    history: 'Founded in 2009 by Mate Rimac, Rimac is a leader in electric hypercar technology.',
    timeline: [
      { year: 2009, event: 'Rimac Automobili founded in a garage' },
      { year: 2011, event: 'Concept_One unveiled at Frankfurt Motor Show' },
      { year: 2018, event: 'C_Two concept (later Nevera) introduced' },
      { year: 2021, event: 'Bugatti Rimac joint venture established' },
      { year: 2022, event: 'Nevera sets 23 performance records in a single day' }
    ]
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
    history: 'The 911 was introduced in 1963 as a more powerful, larger, and more comfortable replacement for the Porsche 356.',
    specs: {
      engine: '3.0L Twin-Turbo Flat-6',
      power: '443 hp',
      topSpeed: '191 mph',
      zeroToSixty: '3.5s'
    },
    modelUrl: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/models/gltf/ferrari.glb',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bmw-m4',
    name: 'M4 Competition',
    year: 2024,
    manufacturerId: 'bmw',
    countryId: 'germany',
    description: 'A high-performance coupe that blends track-ready dynamics with everyday usability.',
    history: 'The M4 replaced the M3 coupe and convertible models in 2014, continuing the legacy of BMW\'s M division.',
    specs: {
      engine: '3.0L Twin-Turbo Inline-6',
      power: '503 hp',
      topSpeed: '180 mph',
      zeroToSixty: '3.8s'
    },
    modelUrl: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/models/gltf/ferrari.glb',
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mercedes-amg-gt',
    name: 'AMG GT Black Series',
    year: 2021,
    manufacturerId: 'mercedes',
    countryId: 'germany',
    description: 'The ultimate expression of Mercedes-AMG performance, featuring extreme aerodynamics and power.',
    history: 'The Black Series represents the most track-focused models from AMG, with the GT being the sixth model to wear the badge.',
    specs: {
      engine: '4.0L V8 Biturbo',
      power: '720 hp',
      topSpeed: '202 mph',
      zeroToSixty: '3.1s'
    },
    modelUrl: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/models/gltf/ferrari.glb',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ferrari-458',
    name: '458 Italia',
    year: 2015,
    manufacturerId: 'ferrari',
    countryId: 'italy',
    description: 'A masterpiece of Italian engineering, featuring a naturally aspirated V8 that sings.',
    history: 'The 458 Italia replaced the F430 and was first officially unveiled at the 2009 Frankfurt Motor Show.',
    specs: {
      engine: '4.5L V8',
      power: '562 hp',
      topSpeed: '202 mph',
      zeroToSixty: '3.4s'
    },
    modelUrl: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/models/gltf/ferrari.glb',
    image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'lamborghini-aventador',
    name: 'Aventador SVJ',
    year: 2021,
    manufacturerId: 'lamborghini',
    countryId: 'italy',
    description: 'A V12-powered beast that redefined the supercar segment with its aggressive design and performance.',
    history: 'The SVJ (Super Veloce Jota) is the most extreme version of the Aventador, setting a Nürburgring lap record.',
    specs: {
      engine: '6.5L V12',
      power: '759 hp',
      topSpeed: '217 mph',
      zeroToSixty: '2.8s'
    },
    modelUrl: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/models/gltf/ferrari.glb',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'tesla-model-3',
    name: 'Model 3 Performance',
    year: 2024,
    manufacturerId: 'tesla',
    countryId: 'usa',
    description: 'The electric car that changed everything. Minimalist design with supercar acceleration.',
    history: 'The Model 3 was unveiled in 2016 and became the world\'s best-selling electric car in history.',
    specs: {
      engine: 'Dual Motor AWD',
      power: '510 hp',
      topSpeed: '163 mph',
      zeroToSixty: '2.9s'
    },
    modelUrl: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/models/gltf/ferrari.glb',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ford-mustang',
    name: 'Mustang Shelby GT500',
    year: 2022,
    manufacturerId: 'ford',
    countryId: 'usa',
    description: 'The most powerful street-legal Ford ever, featuring a supercharged V8 and track-bred tech.',
    history: 'The Shelby GT500 returns to the Mustang lineup as the pinnacle of American muscle performance.',
    specs: {
      engine: '5.2L Supercharged V8',
      power: '760 hp',
      topSpeed: '180 mph',
      zeroToSixty: '3.3s'
    },
    modelUrl: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/models/gltf/ferrari.glb',
    image: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'toyota-supra',
    name: 'GR Supra',
    year: 2022,
    manufacturerId: 'toyota',
    countryId: 'japan',
    description: 'A legend reborn. The Supra returns with a perfect 50/50 balance and a soul-stirring inline-six.',
    history: 'The Supra nameplate returned in 2019 after a 17-year hiatus, developed in collaboration with BMW.',
    specs: {
      engine: '3.0L Turbo Inline-6',
      power: '382 hp',
      topSpeed: '155 mph',
      zeroToSixty: '3.9s'
    },
    modelUrl: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/models/gltf/ferrari.glb',
    image: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'nissan-gtr',
    name: 'GT-R Nismo',
    year: 2024,
    manufacturerId: 'nissan',
    countryId: 'japan',
    description: 'Godzilla in its most potent form. A technological marvel that defies physics on the track.',
    history: 'The GT-R Nismo is the ultimate expression of Nissan\'s engineering prowess, refined over decades of racing.',
    specs: {
      engine: '3.8L Twin-Turbo V6',
      power: '600 hp',
      topSpeed: '196 mph',
      zeroToSixty: '2.5s'
    },
    modelUrl: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/models/gltf/ferrari.glb',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'aston-martin-vantage',
    name: 'Vantage',
    year: 2023,
    manufacturerId: 'aston-martin',
    countryId: 'uk',
    description: 'A heart-pounding sports car with a predator\'s stance and a twin-turbo V8.',
    history: 'The Vantage name has been used by Aston Martin on high-performance variants of their models since 1950.',
    specs: {
      engine: '4.0L Twin-Turbo V8',
      power: '503 hp',
      topSpeed: '195 mph',
      zeroToSixty: '3.6s'
    },
    modelUrl: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/models/gltf/ferrari.glb',
    image: 'https://images.unsplash.com/photo-1603584173870-7f3ca9f094ec?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mclaren-720s',
    name: '720S Spider',
    year: 2023,
    manufacturerId: 'mclaren',
    countryId: 'uk',
    description: 'A lightweight, mid-engined supercar that offers blistering performance and open-top thrills.',
    history: 'The 720S replaced the 650S in 2017, introducing a new carbon fiber chassis and active aerodynamics.',
    specs: {
      engine: '4.0L Twin-Turbo V8',
      power: '710 hp',
      topSpeed: '212 mph',
      zeroToSixty: '2.8s'
    },
    modelUrl: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/models/gltf/ferrari.glb',
    image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bugatti-chiron',
    name: 'Chiron Super Sport',
    year: 2022,
    manufacturerId: 'bugatti',
    countryId: 'france',
    description: 'The fastest, most powerful, and exclusive production super sports car in Bugatti\'s history.',
    history: 'The Chiron is named after the Monegasque driver Louis Chiron and was first revealed in 2016.',
    specs: {
      engine: '8.0L Quad-Turbo W16',
      power: '1578 hp',
      topSpeed: '273 mph',
      zeroToSixty: '2.4s'
    },
    modelUrl: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/models/gltf/ferrari.glb',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'koenigsegg-jesko',
    name: 'Jesko Absolut',
    year: 2023,
    manufacturerId: 'koenigsegg',
    countryId: 'sweden',
    description: 'Designed to be the fastest Koenigsegg ever made, and the fastest car in the world.',
    history: 'Named after Jesko von Koenigsegg, the father of the company\'s founder.',
    specs: {
      engine: '5.0L Twin-Turbo V8',
      power: '1600 hp',
      topSpeed: '330 mph',
      zeroToSixty: '2.5s'
    },
    modelUrl: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/models/gltf/ferrari.glb',
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'rimac-nevera',
    name: 'Nevera',
    year: 2022,
    manufacturerId: 'rimac',
    countryId: 'croatia',
    description: 'The ultimate electric hypercar, pushing the boundaries of performance and technology.',
    history: 'Nevera is the production version of the C_Two concept, named after a sudden Mediterranean storm.',
    specs: {
      engine: 'Quad Electric Motors',
      power: '1914 hp',
      topSpeed: '258 mph',
      zeroToSixty: '1.85s'
    },
    modelUrl: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/models/gltf/ferrari.glb',
    image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=800'
  }
];
