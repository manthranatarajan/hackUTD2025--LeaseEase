import { useState, useEffect } from 'react';
import { MapPin, Navigation, Phone, Clock, X } from 'lucide-react';
import { Car } from '../lib/supabase';

interface Dealership {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  lat: number;
  lng: number;
  distance?: number;
}

interface DealershipLocatorProps {
  car: Car;
  onClose: () => void;
}

const MOCK_DEALERSHIPS: Dealership[] = [
  {
    id: '1',
    name: 'Toyota of Downtown',
    address: '123 Main St',
    city: 'Los Angeles',
    state: 'CA',
    zip: '90012',
    phone: '(213) 555-0100',
    lat: 34.0522,
    lng: -118.2437,
  },
  {
    id: '2',
    name: 'Pacific Toyota',
    address: '456 Ocean Ave',
    city: 'Santa Monica',
    state: 'CA',
    zip: '90401',
    phone: '(310) 555-0200',
    lat: 34.0195,
    lng: -118.4912,
  },
  {
    id: '3',
    name: 'Valley Toyota Center',
    address: '789 Valley Blvd',
    city: 'Van Nuys',
    state: 'CA',
    zip: '91401',
    phone: '(818) 555-0300',
    lat: 34.1900,
    lng: -118.4514,
  },
  {
    id: '4',
    name: 'South Bay Toyota',
    address: '321 Sepulveda Blvd',
    city: 'Torrance',
    state: 'CA',
    zip: '90501',
    phone: '(424) 555-0400',
    lat: 33.8358,
    lng: -118.3406,
  },
  {
    id: '5',
    name: 'Orange County Toyota',
    address: '654 Bristol St',
    city: 'Costa Mesa',
    state: 'CA',
    zip: '92626',
    phone: '(714) 555-0500',
    lat: 33.6846,
    lng: -117.8885,
  },
];

export default function DealershipLocator({ car, onClose }: DealershipLocatorProps) {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [dealerships, setDealerships] = useState<Dealership[]>([]);
  const [selectedDealer, setSelectedDealer] = useState<Dealership | null>(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(location);
          calculateDistances(location);
        },
        (error) => {
          console.error('Location error:', error);
          setLocationError('Unable to access your location. Please enable location services.');
          setDealerships(MOCK_DEALERSHIPS);
        }
      );
    } else {
      setLocationError('Geolocation is not supported by your browser.');
      setDealerships(MOCK_DEALERSHIPS);
    }
  }, []);

  const calculateDistances = (userLoc: { lat: number; lng: number }) => {
    const dealershipsWithDistance = MOCK_DEALERSHIPS.map((dealer) => {
      const distance = calculateDistance(
        userLoc.lat,
        userLoc.lng,
        dealer.lat,
        dealer.lng
      );
      return { ...dealer, distance };
    }).sort((a, b) => (a.distance || 0) - (b.distance || 0));

    setDealerships(dealershipsWithDistance);
  };

  const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
    const R = 3959;
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const toRad = (value: number): number => {
    return (value * Math.PI) / 180;
  };

  const getMapUrl = (dealer: Dealership) => {
    const address = encodeURIComponent(`${dealer.address}, ${dealer.city}, ${dealer.state} ${dealer.zip}`);
    return `https://www.google.com/maps/search/?api=1&query=${address}`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Find Your {car.model}</h2>
            <p className="text-sm text-gray-600">Locate nearby dealerships with this vehicle</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="flex-1 overflow-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <img
                    src={car.image_url}
                    alt={`${car.year} ${car.make} ${car.model}`}
                    className="w-32 h-24 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">
                      {car.year} {car.make} {car.model}
                    </h3>
                    <p className="text-sm text-gray-600">{car.trim}</p>
                    <p className="text-lg font-bold text-red-600 mt-1">
                      ${car.monthly_payment}/mo
                    </p>
                  </div>
                </div>
              </div>

              {locationError && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">{locationError}</p>
                </div>
              )}

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  {userLocation ? 'Nearest Dealerships' : 'Toyota Dealerships'}
                </h3>
                <div className="space-y-3">
                  {dealerships.map((dealer) => (
                    <div
                      key={dealer.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        selectedDealer?.id === dealer.id
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                      onClick={() => setSelectedDealer(dealer)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{dealer.name}</h4>
                          <div className="mt-2 space-y-1">
                            <div className="flex items-start gap-2 text-sm text-gray-600">
                              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                              <span>
                                {dealer.address}<br />
                                {dealer.city}, {dealer.state} {dealer.zip}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Phone className="w-4 h-4" />
                              <span>{dealer.phone}</span>
                            </div>
                          </div>
                        </div>
                        {dealer.distance && (
                          <div className="text-right ml-4">
                            <div className="text-sm font-semibold text-red-600">
                              {dealer.distance.toFixed(1)} mi
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="mt-3 flex gap-2">
                        <a
                          href={getMapUrl(dealer)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-red-600 text-white text-center py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Navigation className="w-4 h-4" />
                          Get Directions
                        </a>
                        <a
                          href={`tel:${dealer.phone}`}
                          className="px-4 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Phone className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-0">
              <div className="bg-gray-100 rounded-lg overflow-hidden h-[600px]">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Toyota+dealerships+near+${
                    userLocation ? `${userLocation.lat},${userLocation.lng}` : 'Los Angeles,CA'
                  }&zoom=11`}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
