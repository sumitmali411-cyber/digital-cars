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
  },
  {
    id: 'ford',
    name: 'Ford',
    countryId: 'usa',
    logo: 'https://logo.clearbit.com/ford.com',
    history: 'Founded by Henry Ford in 1903, Ford introduced methods for large-scale manufacturing of cars and large-scale management of an industrial workforce.'
  },
  {
    id: 'lamborghini',
    name: 'Lamborghini',
    countryId: 'italy',
    logo: 'https://logo.clearbit.com/lamborghini.com',
    history: 'Founded in 1963 by Ferruccio Lamborghini, the company is known for its luxury sports cars and SUVs.'
  },
  {
    id: 'aston-martin',
    name: 'Aston Martin',
    countryId: 'uk',
    logo: 'https://logo.clearbit.com/astonmartin.com',
    history: 'Founded in 1913 by Lionel Martin and Robert Bamford, Aston Martin is an iconic British luxury sports car brand.'
  },
  {
    id: 'bugatti',
    name: 'Bugatti',
    countryId: 'france',
    logo: 'https://logo.clearbit.com/bugatti.com',
    history: 'Founded in 1909 by Ettore Bugatti, the brand is famous for high-performance automobiles and artistic design.'
  },
  {
    id: 'koenigsegg',
    name: 'Koenigsegg',
    countryId: 'sweden',
    logo: 'https://logo.clearbit.com/koenigsegg.com',
    history: 'Founded in 1994 by Christian von Koenigsegg, the company produces world-record-breaking hypercars.'
  },
  {
    id: 'rimac',
    name: 'Rimac',
    countryId: 'croatia',
    logo: 'https://logo.clearbit.com/rimac-automobili.com',
    history: 'Founded in 2009 by Mate Rimac, Rimac is a leader in electric hypercar technology.'
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
