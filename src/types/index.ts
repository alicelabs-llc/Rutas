// ==================== IDIOMAS ====================
export type Language = 'es' | 'en' | 'qu';

// ==================== VEHÍCULOS ====================
export type VehicleType = 'moto' | 'carro' | 'pickup' | 'van' | 'lancha' | 'bus';

export interface Vehicle {
  id: string;
  type: VehicleType;
  model: string;
  color: string;
  plate: string;
  capacity: number;
  image?: string;
  features?: string[];
}

export interface VehicleCategory {
  type: VehicleType;
  name: string;
  nameEn: string;
  nameQu: string;
  icon: string;
  capacity: number;
  description: string;
  basePrice: number;
  pricePerKm: number;
  available: boolean;
}

// ==================== USUARIOS ====================
export interface User {
  id: string;
  name: string;
  phone: string;
  email?: string;
  avatar?: string;
  rating: number;
  totalTrips: number;
  language: Language;
  createdAt: string;
}

export interface Driver {
  id: string;
  name: string;
  phone: string;
  avatar: string;
  rating: number;
  totalTrips: number;
  vehicle: Vehicle;
  isOnline: boolean;
  currentLocation?: Coordinates;
}

// ==================== UBICACIÓN ====================
export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Address {
  id: string;
  name: string;
  description: string;
  coordinates: Coordinates;
  reference?: string;
}

// ==================== VIAJE ====================
export type RideStatus = 
  | 'idle'
  | 'searching'
  | 'driver_assigned'
  | 'driver_en_route'
  | 'driver_arrived'
  | 'in_progress'
  | 'completed'
  | 'cancelled';

export type RideType = 'express' | 'scheduled' | 'negotiated' | 'package' | 'emergency';

export interface RideRequest {
  id: string;
  userId: string;
  pickup: Address;
  destination: Address;
  vehicleType: VehicleType;
  rideType: RideType;
  estimatedPrice: number;
  negotiatedPrice?: number;
  distance: number;
  estimatedTime: number;
}

export interface Ride {
  id: string;
  request: RideRequest;
  driver: Driver;
  status: RideStatus;
  startTime?: string;
  endTime?: string;
  actualPrice: number;
  paymentMethod: PaymentMethod;
  rating?: number;
  review?: string;
}

// ==================== PAGO ====================
export type PaymentMethodType = 'pagoefectivo' | 'kushki' | 'deuna' | 'transfer' | 'banco';

export interface PaymentMethod {
  id: string;
  type: PaymentMethodType;
  name: string;
  last4?: string;
  isDefault: boolean;
}

export interface PaymentStatus = 'pending' | 'processing' | 'completed' | 'failed' | 'refunded';

export interface Payment {
  id: string;
  rideId: string;
  amount: number;
  method: PaymentMethod;
  status: PaymentStatus;
  transactionId?: string;
  createdAt: string;
  completedAt?: string;
}

// ==================== HISTORIAL ====================
export interface RideHistory {
  rides: Ride[];
  totalTrips: number;
  totalSpent: number;
  favoritePlaces: Address[];
}

// ==================== REGIÓN ====================
export interface Province {
  id: string;
  name: string;
  nameEn: string;
  nameQu: string;
  cities: City[];
}

export interface City {
  id: string;
  name: string;
  provinceId: string;
  coordinates: Coordinates;
}

export const ORIENT_PROVINCES: Province[] = [
  {
    id: 'pastaza',
    name: 'Pastaza',
    nameEn: 'Pastaza',
    nameQu: 'Pastaza',
    cities: [
      { id: 'puyo', name: 'Puyo', provinceId: 'pastaza', coordinates: { latitude: -1.4927, longitude: -78.0031 } },
      { id: 'mera', name: 'Mera', provinceId: 'pastaza', coordinates: { latitude: -1.4508, longitude: -78.0856 } },
      { id: 'shell', name: 'Shell', provinceId: 'pastaza', coordinates: { latitude: -1.3567, longitude: -78.0503 } },
    ]
  },
  {
    id: 'napo',
    name: 'Napo',
    nameEn: 'Napo',
    nameQu: 'Napu',
    cities: [
      { id: 'tena', name: 'Tena', provinceId: 'napo', coordinates: { latitude: -0.9933, longitude: -77.8128 } },
      { id: 'archidona', name: 'Archidona', provinceId: 'napo', coordinates: { latitude: -0.9167, longitude: -77.7833 } },
      { id: 'loreto', name: 'Loreto', provinceId: 'napo', coordinates: { latitude: -0.7500, longitude: -77.2833 } },
    ]
  },
  {
    id: 'orellana',
    name: 'Orellana',
    nameEn: 'Orellana',
    nameQu: 'Orellana',
    cities: [
      { id: 'coca', name: 'Coca', provinceId: 'orellana', coordinates: { latitude: -0.3333, longitude: -76.9833 } },
      { id: 'orellana', name: 'Francisco de Orellana', provinceId: 'orellana', coordinates: { latitude: -0.4500, longitude: -76.9833 } },
    ]
  },
  {
    id: 'sucumbios',
    name: 'Sucumbíos',
    nameEn: 'Sucumbíos',
    nameQu: 'Sucumbios',
    cities: [
      { id: 'lagoagrio', name: 'Lago Agrio', provinceId: 'sucumbios', coordinates: { latitude: 0.0833, longitude: -76.6833 } },
      { id: 'nuevaloja', name: 'Nueva Loja', provinceId: 'sucumbios', coordinates: { latitude: 0.1000, longitude: -76.7500 } },
      { id: 'shushufindi', name: 'Shushufindi', provinceId: 'sucumbios', coordinates: { latitude: -0.2000, longitude: -76.6500 } },
    ]
  },
  {
    id: 'morona',
    name: 'Morona Santiago',
    nameEn: 'Morona Santiago',
    nameQu: 'Morona',
    cities: [
      { id: 'macas', name: 'Macas', provinceId: 'morona', coordinates: { latitude: -2.3000, longitude: -78.1167 } },
      { id: 'gualaquiza', name: 'Gualaquiza', provinceId: 'morona', coordinates: { latitude: -3.4000, longitude: -78.5833 } },
    ]
  },
  {
    id: 'zamora',
    name: 'Zamora Chinchipe',
    nameEn: 'Zamora Chinchipe',
    nameQu: 'Zamora',
    cities: [
      { id: 'zamora', name: 'Zamora', provinceId: 'zamora', coordinates: { latitude: -4.0667, longitude: -78.9500 } },
      { id: 'yantzaza', name: 'Yantzaza', provinceId: 'zamora', coordinates: { latitude: -3.8333, longitude: -78.7833 } },
    ]
  }
];
