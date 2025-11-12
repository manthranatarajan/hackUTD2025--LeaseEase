import { X, DollarSign, Fuel, Gauge, Settings } from 'lucide-react';
import { Car } from '../lib/supabase';

interface CompareModalProps {
  cars: [Car, Car];
  onClose: () => void;
}

export default function CompareModal({ cars, onClose }: CompareModalProps) {
  const [car1, car2] = cars;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Compare Vehicles</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6 p-6">
          {[car1, car2].map((car, index) => (
            <div key={car.id} className="space-y-4">
              <div className="relative h-56 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={car.image_url}
                  alt={`${car.year} ${car.make} ${car.model}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {car.year} {car.make} {car.model}
                </h3>
                <p className="text-sm text-gray-600">{car.trim}</p>
                {car.color && (
                  <p className="text-sm text-gray-600 capitalize">{car.color}</p>
                )}
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="text-3xl font-bold text-red-600">
                  ${car.monthly_payment}<span className="text-lg">/mo</span>
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  MSRP: ${car.msrp.toLocaleString()}
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Specifications</h4>

                {car.specs.horsepower && (
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Gauge className="w-4 h-4 text-red-600" />
                      <span>Horsepower</span>
                    </div>
                    <span className="font-semibold text-gray-900">{car.specs.horsepower}</span>
                  </div>
                )}

                {(car.specs.mpg || car.specs.range) && (
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Fuel className="w-4 h-4 text-red-600" />
                      <span>Efficiency</span>
                    </div>
                    <span className="font-semibold text-gray-900">
                      {car.specs.range ? `${car.specs.range} range` : `${car.specs.mpg} MPG`}
                    </span>
                  </div>
                )}

                {car.specs.transmission && (
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Settings className="w-4 h-4 text-red-600" />
                      <span>Transmission</span>
                    </div>
                    <span className="font-semibold text-gray-900">{car.specs.transmission}</span>
                  </div>
                )}

                {car.specs.drivetrain && (
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Settings className="w-4 h-4 text-red-600" />
                      <span>Drivetrain</span>
                    </div>
                    <span className="font-semibold text-gray-900">{car.specs.drivetrain}</span>
                  </div>
                )}
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Features</h4>
                <div className="flex flex-wrap gap-1">
                  {car.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
