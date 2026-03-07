
export interface Car {
  id: string;
  name: string;
  year: number;
  manufacturerId: string;
  countryId: string;
  description: string;
  specs: {
    engine: string;
    power: string;
    topSpeed: string;
    zeroToSixty: string;
  };
  modelUrl: string; // GLB URL
  image: string;
}

export interface Manufacturer {
  id: string;
  name: string;
  countryId: string;
  logo: string;
  history: string;
}

export interface Country {
  id: string;
  name: string;
  flag: string;
  description: string;
}
