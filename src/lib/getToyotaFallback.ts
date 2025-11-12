import { Car } from './supabase';

export async function getToyotaFallback(
  minPayment: number = 0,
  maxPayment: number = 1000
): Promise<Car[]> {
  const fallbackCars: Partial<Car>[] = [
    {
      make: 'Toyota',
      model: 'Corolla Cross',
      year: 2024,
      trim: 'LE',
      msrp: 28050,
      monthly_payment: 375,
      image_url: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg',
      category: 'suv',
      fuel_type: 'gas',
      features: ['Lane Departure Warning', 'Apple CarPlay', 'Android Auto', 'AWD'],
      specs: {
        horsepower: '169 hp',
        mpg: '31/33',
        transmission: 'CVT',
        drivetrain: 'AWD'
      }
    },
    {
      make: 'Toyota',
      model: 'Crown',
      year: 2024,
      trim: 'XLE',
      msrp: 41000,
      monthly_payment: 549,
      image_url: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg',
      category: 'sedan',
      fuel_type: 'hybrid',
      features: ['Hybrid Technology', 'Adaptive Cruise Control', 'Leather Seats', 'AWD'],
      specs: {
        horsepower: '236 hp',
        mpg: '41/37',
        transmission: 'CVT',
        drivetrain: 'AWD'
      }
    },
    {
      make: 'Toyota',
      model: 'Sequoia',
      year: 2024,
      trim: 'SR5',
      msrp: 59795,
      monthly_payment: 799,
      image_url: 'https://images.pexels.com/photos/164654/pexels-photo-164654.jpeg',
      category: 'suv',
      fuel_type: 'hybrid',
      features: ['3rd Row Seating', 'Hybrid Technology', 'Towing Package', '4WD'],
      specs: {
        horsepower: '437 hp',
        mpg: '19/22',
        transmission: 'Automatic',
        drivetrain: '4WD'
      }
    }
  ];

  return fallbackCars
    .filter(car =>
      car.monthly_payment! >= minPayment &&
      car.monthly_payment! <= maxPayment
    )
    .map((car, index) => ({
      id: `fallback-${index}`,
      make: car.make!,
      model: car.model!,
      year: car.year!,
      trim: car.trim!,
      msrp: car.msrp!,
      monthly_payment: car.monthly_payment!,
      image_url: car.image_url!,
      category: car.category!,
      fuel_type: car.fuel_type!,
      features: car.features!,
      specs: car.specs!,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }));
}
