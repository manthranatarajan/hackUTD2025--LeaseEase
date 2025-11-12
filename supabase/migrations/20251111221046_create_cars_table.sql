/*
  # Create cars table for LeaseEase

CREATE TABLE IF NOT EXISTS cars (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  make text NOT NULL,
  model text NOT NULL,
  year integer NOT NULL,
  trim text DEFAULT '',
  msrp numeric NOT NULL,
  monthly_payment numeric NOT NULL,
  image_url text DEFAULT '',
  category text DEFAULT 'sedan',
  fuel_type text DEFAULT 'gas',
  features jsonb DEFAULT '[]'::jsonb,
  specs jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE cars ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view cars"
  ON cars
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Authenticated users can view cars"
  ON cars
  FOR SELECT
  TO authenticated
  USING (true);

-- Insert sample Toyota cars data
INSERT INTO cars (make, model, year, trim, msrp, monthly_payment, image_url, category, fuel_type, features, specs) VALUES
('Toyota', 'Camry', 2024, 'LE', 26420, 349, 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg', 'sedan', 'gas', '["Adaptive Cruise Control", "Lane Departure Warning", "Apple CarPlay", "Android Auto", "Backup Camera"]', '{"horsepower": "203 hp", "mpg": "28/39", "transmission": "Automatic", "drivetrain": "FWD"}'),
('Toyota', 'Camry', 2024, 'XSE', 31170, 419, 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg', 'sedan', 'gas', '["Adaptive Cruise Control", "Lane Departure Warning", "Apple CarPlay", "Android Auto", "Backup Camera", "Leather Seats", "Moonroof"]', '{"horsepower": "203 hp", "mpg": "28/39", "transmission": "Automatic", "drivetrain": "FWD"}'),
('Toyota', 'RAV4', 2024, 'LE', 29075, 389, 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg', 'suv', 'gas', '["Adaptive Cruise Control", "Lane Departure Warning", "Apple CarPlay", "Android Auto", "All-Wheel Drive"]', '{"horsepower": "203 hp", "mpg": "27/35", "transmission": "Automatic", "drivetrain": "AWD"}'),
('Toyota', 'RAV4', 2024, 'XLE Premium', 34650, 465, 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg', 'suv', 'gas', '["Adaptive Cruise Control", "Lane Departure Warning", "Apple CarPlay", "Android Auto", "All-Wheel Drive", "Power Liftgate", "Moonroof"]', '{"horsepower": "203 hp", "mpg": "27/35", "transmission": "Automatic", "drivetrain": "AWD"}'),
('Toyota', 'Corolla', 2024, 'LE', 22050, 289, 'https://images.pexels.com/photos/1719647/pexels-photo-1719647.jpeg', 'sedan', 'gas', '["Lane Departure Warning", "Apple CarPlay", "Android Auto", "Backup Camera"]', '{"horsepower": "169 hp", "mpg": "31/40", "transmission": "CVT", "drivetrain": "FWD"}'),
('Toyota', 'Corolla', 2024, 'XSE', 26250, 345, 'https://images.pexels.com/photos/1719647/pexels-photo-1719647.jpeg', 'sedan', 'gas', '["Lane Departure Warning", "Apple CarPlay", "Android Auto", "Backup Camera", "Leather Seats"]', '{"horsepower": "169 hp", "mpg": "31/40", "transmission": "CVT", "drivetrain": "FWD"}'),
('Toyota', 'Highlander', 2024, 'LE', 39120, 525, 'https://images.pexels.com/photos/164654/pexels-photo-164654.jpeg', 'suv', 'gas', '["Adaptive Cruise Control", "Lane Departure Warning", "Apple CarPlay", "Android Auto", "3rd Row Seating", "All-Wheel Drive"]', '{"horsepower": "265 hp", "mpg": "21/29", "transmission": "Automatic", "drivetrain": "AWD"}'),
('Toyota', 'Highlander', 2024, 'XLE', 44320, 595, 'https://images.pexels.com/photos/164654/pexels-photo-164654.jpeg', 'suv', 'gas', '["Adaptive Cruise Control", "Lane Departure Warning", "Apple CarPlay", "Android Auto", "3rd Row Seating", "All-Wheel Drive", "Leather Seats", "Moonroof"]', '{"horsepower": "265 hp", "mpg": "21/29", "transmission": "Automatic", "drivetrain": "AWD"}'),
('Toyota', 'Prius', 2024, 'LE', 27950, 369, 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg', 'sedan', 'hybrid', '["Lane Departure Warning", "Apple CarPlay", "Android Auto", "Backup Camera", "Hybrid Technology"]', '{"horsepower": "196 hp", "mpg": "57/56", "transmission": "CVT", "drivetrain": "FWD"}'),
('Toyota', 'Tacoma', 2024, 'SR5', 32420, 435, 'https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg', 'truck', 'gas', '["Apple CarPlay", "Android Auto", "Backup Camera", "4WD", "Towing Package"]', '{"horsepower": "278 hp", "mpg": "19/24", "transmission": "Automatic", "drivetrain": "4WD"}'),
('Toyota', 'Tacoma', 2024, 'TRD Sport', 38150, 515, 'https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg', 'truck', 'gas', '["Apple CarPlay", "Android Auto", "Backup Camera", "4WD", "Towing Package", "Off-Road Package", "Sport Seats"]', '{"horsepower": "278 hp", "mpg": "19/24", "transmission": "Automatic", "drivetrain": "4WD"}'),
('Toyota', 'bZ4X', 2024, 'XLE', 42000, 565, 'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg', 'suv', 'electric', '["Adaptive Cruise Control", "Lane Departure Warning", "Apple CarPlay", "Android Auto", "All-Wheel Drive", "Electric Vehicle", "Fast Charging"]', '{"horsepower": "214 hp", "range": "252 miles", "transmission": "Single-Speed", "drivetrain": "AWD"}');
