import { Car } from '../lib/supabase';
import { DollarSign, Fuel, Gauge, Settings, GitCompare, MapPin } from 'lucide-react';

interface CarsGridProps {
  cars: Car[];
  onRemove?: (carId: string) => void;
  onCompare?: (carId: string) => void;
  selectedForCompare?: string[];
  onFindDealership?: (car: Car) => void;
}

export default function CarsGrid({ cars, onRemove, onCompare, selectedForCompare = [], onFindDealership }: CarsGridProps) {
  if (cars.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p>No vehicles match your criteria. Try adjusting your preferences.</p>
      </div>
    );
  }

  const isSelected = (carId: string) => selectedForCompare.includes(carId);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {cars.map((car) => (
        <div
          key={car.id}
          className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group ${
            isSelected(car.id) ? 'ring-4 ring-red-500' : ''
          }`}
        >
          <div className="relative h-48 overflow-hidden bg-gray-100">
            <img
              src={car.image_url}
              alt={`${car.year} ${car.make} ${car.model}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              ${car.monthly_payment}/mo
            </div>
          </div>

          <div className="p-5">
            <div className="mb-3">
              <h3 className="text-xl font-bold text-gray-900">
                {car.year} {car.make} {car.model}
              </h3>
              <div className="flex items-center gap-2">
                <p className="text-sm text-gray-600">{car.trim}</p>
                {car.color && (
                  <>
                    <span className="text-gray-400">•</span>
                    <p className="text-sm text-gray-600 capitalize">{car.color}</p>
                  </>
                )}
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <DollarSign className="w-4 h-4 text-red-600" />
                <span>MSRP: ${car.msrp.toLocaleString()}</span>
              </div>
              {car.specs.horsepower && (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Gauge className="w-4 h-4 text-red-600" />
                  <span>{car.specs.horsepower}</span>
                </div>
              )}
              {(car.specs.mpg || car.specs.range) && (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Fuel className="w-4 h-4 text-red-600" />
                  <span>
                    {car.specs.range ? `${car.specs.range} range` : `${car.specs.mpg} MPG`}
                  </span>
                </div>
              )}
              {car.specs.transmission && (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Settings className="w-4 h-4 text-red-600" />
                  <span>{car.specs.transmission} • {car.specs.drivetrain}</span>
                </div>
              )}
            </div>

            <div className="mb-4">
              <p className="text-xs font-semibold text-gray-700 mb-2">Key Features:</p>
              <div className="flex flex-wrap gap-1">
                {car.features.slice(0, 3).map((feature, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
                {car.features.length > 3 && (
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                    +{car.features.length - 3} more
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-2">
              {onFindDealership && (
                <button
                  onClick={() => onFindDealership(car)}
                  className="w-full py-2 text-sm font-medium bg-red-600 text-white hover:bg-red-700 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  Find Dealership
                </button>
              )}
              {onCompare && (
                <button
                  onClick={() => onCompare(car.id)}
                  className={`w-full py-2 text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2 ${
                    isSelected(car.id)
                      ? 'bg-red-600 text-white hover:bg-red-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <GitCompare className="w-4 h-4" />
                  {isSelected(car.id) ? 'Selected' : 'Compare'}
                </button>
              )}
              {onRemove && (
                <button
                  onClick={() => onRemove(car.id)}
                  className="w-full py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  Remove this option
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
