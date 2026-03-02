import { VehicleCategory, PaymentMethod } from '../types';

export const VEHICLE_CATEGORIES: VehicleCategory[] = [
  {
    type: 'moto',
    name: 'MotoExpress',
    nameEn: 'MotoExpress',
    nameQu: 'MotoExpress',
    icon: '🏍️',
    capacity: 2,
    description: 'Rápido y económico para la ciudad',
    basePrice: 1.50,
    pricePerKm: 0.50,
    available: true,
  },
  {
    type: 'carro',
    name: 'CarroCompacto',
    nameEn: 'CompactCar',
    nameQu: 'CarruCompact',
    icon: '🚗',
    capacity: 3,
    description: 'Confortable para viajes urbanos',
    basePrice: 2.50,
    pricePerKm: 0.80,
    available: true,
  },
  {
    type: 'pickup',
    name: 'Camioneta 4x4',
    nameEn: '4x4 Pickup',
    nameQu: '4x4 Camioneta',
    icon: '🛻',
    capacity: 5,
    description: 'Ideal para caminos rurales y lluvia',
    basePrice: 4.00,
    pricePerKm: 1.20,
    available: true,
  },
  {
    type: 'van',
    name: 'VanGrupos',
    nameEn: 'GroupVan',
    nameQu: 'VanGrupos',
    icon: '🚐',
    capacity: 12,
    description: 'Grupos grandes y turismo',
    basePrice: 6.00,
    pricePerKm: 1.50,
    available: true,
  },
  {
    type: 'lancha',
    name: 'LanchaRio',
    nameEn: 'RiverBoat',
    nameQu: 'Riyku',
    icon: '⛵',
    capacity: 10,
    description: 'Cruces fluviales y zonas ribereñas',
    basePrice: 5.00,
    pricePerKm: 2.00,
    available: true,
  },
  {
    type: 'bus',
    name: 'BusOriente',
    nameEn: 'BusOriente',
    nameQu: 'Bus',
    icon: '🚌',
    capacity: 30,
    description: 'Rutas fijas de transporte público',
    basePrice: 1.00,
    pricePerKm: 0.30,
    available: true,
  },
];

export const DEFAULT_PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: 'efectivo-1',
    type: 'pagoefectivo',
    name: 'Pago en Efectivo',
    isDefault: true,
  },
  {
    id: 'kushki-1',
    type: 'kushki',
    name: 'Visa ****4521',
    last4: '4521',
    isDefault: false,
  },
  {
    id: 'deuna-1',
    type: 'deuna',
    name: 'DeUna',
    isDefault: false,
  },
];

// Mock driver data for demo
export const MOCK_DRIVER = {
  id: 'driver-1',
  name: 'Carlos González',
  phone: '+593 98 123 4567',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  rating: 4.9,
  totalTrips: 2450,
  vehicle: {
    id: 'vehicle-1',
    type: 'pickup' as const,
    model: 'Toyota Hilux 2023',
    color: 'Blanco',
    plate: 'PBA-1234',
    capacity: 5,
  },
  isOnline: true,
};

export const SAMPLE_ADDRESSES = [
  {
    id: 'addr-1',
    name: 'Casa',
    description: 'Av. Principal, Puyo',
    coordinates: { latitude: -1.4927, longitude: -78.0031 },
  },
  {
    id: 'addr-2',
    name: 'Trabajo',
    description: 'Centro Comercial El Atrio',
    coordinates: { latitude: -1.4900, longitude: -78.0000 },
  },
  {
    id: 'addr-3',
    name: 'Mercado',
    description: 'Mercado Central de Puyo',
    coordinates: { latitude: -1.4950, longitude: -78.0050 },
  },
];

// Calculate price based on distance
export const calculatePrice = (distanceKm: number, vehicleType: string): number => {
  const category = VEHICLE_CATEGORIES.find(v => v.type === vehicleType);
  if (!category) return 0;
  return category.basePrice + (distanceKm * category.pricePerKm);
};

// Calculate estimated time based on distance and vehicle type
export const calculateTime = (distanceKm: number, vehicleType: string): number => {
  // Average speeds in km/h for different vehicle types
  const speeds: Record<string, number> = {
    moto: 50,
    carro: 45,
    pickup: 40,
    van: 35,
    lancha: 20,
    bus: 30,
  };
  
  const speed = speeds[vehicleType] || 40;
  const timeHours = distanceKm / speed;
  return Math.round(timeHours * 60); // Return in minutes
};
