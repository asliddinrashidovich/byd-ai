export type Language = 'uz' | 'ru' | 'en';

export interface VehicleColor {
  id: string;
  name: Record<Language, string>;
  hex: string;
  bgClass: string;
  image: string; // High-quality image showing the car in this color
  extraPrice: number;
}

export interface VehicleWheel {
  id: string;
  name: Record<Language, string>;
  size: string;
  image: string;
  extraPrice: number;
}

export interface VehicleInterior {
  id: string;
  name: Record<Language, string>;
  hex: string;
  image: string;
  extraPrice: number;
}

export interface VehicleSpecs {
  battery: string;
  range: string;
  power: string;
  acceleration: string;
  maxSpeed: string;
  dimensions: string;
}

export interface Vehicle {
  id: string;
  name: string;
  type: 'hybrid' | 'ev';
  basePriceUZS: number;
  featuredImage: string;
  description: Record<Language, string>;
  specs: VehicleSpecs;
  colors: VehicleColor[];
  wheels: VehicleWheel[];
  interiors: VehicleInterior[];
}

export interface Dealer {
  id: string;
  name: Record<Language, string>;
  address: Record<Language, string>;
  phone: string;
  hours: Record<Language, string>;
  city: Record<Language, string>;
  lat: number;
  lng: number;
}

export interface TestDriveBooking {
  id: string;
  modelId: string;
  fullName: string;
  phone: string;
  dealerId: string;
  date: string;
  timeSlot: string;
  consent: boolean;
}
