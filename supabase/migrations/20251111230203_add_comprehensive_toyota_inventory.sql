-- Toyota Corolla (Entry Sedan)
INSERT INTO cars (make, model, year, trim, msrp, monthly_payment, image_url, category, fuel_type, color, features, specs)
VALUES
  ('Toyota', 'Corolla', 2024, 'L', 22000, 265, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800', 'sedan', 'gas', 'white', 
   '["Lane Departure Alert", "Pre-Collision System", "7-inch Touchscreen"]'::jsonb, 
   '{"horsepower": "139 hp", "mpg": "31/40", "transmission": "CVT", "drivetrain": "FWD"}'::jsonb),
  
  ('Toyota', 'Corolla', 2024, 'LE', 24000, 289, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800', 'sedan', 'gas', 'silver', 
   '["Adaptive Cruise Control", "Apple CarPlay", "Android Auto", "LED Headlights"]'::jsonb, 
   '{"horsepower": "169 hp", "mpg": "32/41", "transmission": "CVT", "drivetrain": "FWD"}'::jsonb),

  ('Toyota', 'Corolla', 2024, 'SE', 26500, 319, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800', 'sedan', 'gas', 'red', 
   '["Sport Suspension", "18-inch Wheels", "Heated Seats", "Dual-Zone Climate"]'::jsonb, 
   '{"horsepower": "169 hp", "mpg": "31/40", "transmission": "CVT", "drivetrain": "FWD"}'::jsonb),

  ('Toyota', 'Corolla', 2024, 'XLE', 28500, 343, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800', 'sedan', 'gas', 'black', 
   '["SofTex Upholstery", "Wireless Charging", "Premium Audio", "Moonroof"]'::jsonb, 
   '{"horsepower": "169 hp", "mpg": "32/41", "transmission": "CVT", "drivetrain": "FWD"}'::jsonb),

  ('Toyota', 'Corolla', 2024, 'XSE', 29000, 349, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800', 'sedan', 'gas', 'blue', 
   '["Sport Styling", "Paddle Shifters", "Black Roof", "Sport Seats"]'::jsonb, 
   '{"horsepower": "169 hp", "mpg": "31/38", "transmission": "CVT", "drivetrain": "FWD"}'::jsonb);

-- Toyota Corolla Hybrid
INSERT INTO cars (make, model, year, trim, msrp, monthly_payment, image_url, category, fuel_type, color, features, specs)
VALUES
  ('Toyota', 'Corolla Hybrid', 2024, 'LE', 26000, 313, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800', 'sedan', 'hybrid', 'white', 
   '["Hybrid Efficiency", "EV Mode", "Regenerative Braking", "Eco Display"]'::jsonb, 
   '{"horsepower": "121 hp", "mpg": "53/52", "transmission": "CVT", "drivetrain": "FWD"}'::jsonb),

  ('Toyota', 'Corolla Hybrid', 2024, 'SE', 28000, 337, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800', 'sedan', 'hybrid', 'silver', 
   '["Sport Hybrid", "18-inch Wheels", "Sport Seats", "LED Lighting"]'::jsonb, 
   '{"horsepower": "121 hp", "mpg": "53/52", "transmission": "CVT", "drivetrain": "FWD"}'::jsonb);

-- Toyota Camry (Midsize Sedan)
INSERT INTO cars (make, model, year, trim, msrp, monthly_payment, image_url, category, fuel_type, color, features, specs)
VALUES
  ('Toyota', 'Camry', 2024, 'LE', 28000, 337, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800', 'sedan', 'gas', 'white', 
   '["Toyota Safety Sense 2.5", "8-inch Touchscreen", "Dual-Zone Climate"]'::jsonb, 
   '{"horsepower": "203 hp", "mpg": "28/39", "transmission": "8-Speed Auto", "drivetrain": "FWD"}'::jsonb),

  ('Toyota', 'Camry', 2024, 'SE', 29500, 355, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800', 'sedan', 'gas', 'gray', 
   '["Sport Mode", "19-inch Wheels", "Blind Spot Monitor", "Sport Seats"]'::jsonb, 
   '{"horsepower": "203 hp", "mpg": "28/39", "transmission": "8-Speed Auto", "drivetrain": "FWD"}'::jsonb),

  ('Toyota', 'Camry', 2024, 'XLE', 32500, 391, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800', 'sedan', 'gas', 'black', 
   '["Leather Seats", "Moonroof", "Premium JBL Audio", "Power Driver Seat"]'::jsonb, 
   '{"horsepower": "203 hp", "mpg": "28/39", "transmission": "8-Speed Auto", "drivetrain": "FWD"}'::jsonb),

  ('Toyota', 'Camry', 2024, 'XSE', 33000, 398, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800', 'sedan', 'gas', 'red', 
   '["Sport Styling", "Paddle Shifters", "Black Roof", "Quad Exhaust"]'::jsonb, 
   '{"horsepower": "203 hp", "mpg": "28/39", "transmission": "8-Speed Auto", "drivetrain": "FWD"}'::jsonb),

  ('Toyota', 'Camry', 2024, 'TRD', 36000, 434, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800', 'sedan', 'gas', 'white', 
   '["TRD Performance", "Sport Suspension", "Red Interior Accents", "TRD Exhaust"]'::jsonb, 
   '{"horsepower": "301 hp", "mpg": "22/31", "transmission": "8-Speed Auto", "drivetrain": "FWD"}'::jsonb);

-- Toyota Camry Hybrid
INSERT INTO cars (make, model, year, trim, msrp, monthly_payment, image_url, category, fuel_type, color, features, specs)
VALUES
  ('Toyota', 'Camry Hybrid', 2024, 'LE', 31000, 373, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800', 'sedan', 'hybrid', 'blue', 
   '["Hybrid Synergy Drive", "EV Mode", "Eco Dashboard", "Power Flow Display"]'::jsonb, 
   '{"horsepower": "208 hp", "mpg": "51/53", "transmission": "CVT", "drivetrain": "FWD"}'::jsonb),

  ('Toyota', 'Camry Hybrid', 2024, 'SE', 33500, 403, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800', 'sedan', 'hybrid', 'silver', 
   '["Sport Hybrid", "19-inch Wheels", "Sport Seats", "Paddle Shifters"]'::jsonb, 
   '{"horsepower": "208 hp", "mpg": "51/53", "transmission": "CVT", "drivetrain": "FWD"}'::jsonb),

  ('Toyota', 'Camry Hybrid', 2024, 'XLE', 35000, 422, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800', 'sedan', 'hybrid', 'black', 
   '["Premium Hybrid", "Leather Interior", "Moonroof", "JBL Premium Audio"]'::jsonb, 
   '{"horsepower": "208 hp", "mpg": "51/53", "transmission": "CVT", "drivetrain": "FWD"}'::jsonb);

-- Toyota Avalon (Full-Size Luxury Sedan)
INSERT INTO cars (make, model, year, trim, msrp, monthly_payment, image_url, category, fuel_type, color, features, specs)
VALUES
  ('Toyota', 'Avalon', 2024, 'XLE', 37000, 446, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800', 'sedan', 'gas', 'silver', 
   '["Luxury Interior", "9-inch Display", "Premium Audio", "Heated Seats"]'::jsonb, 
   '{"horsepower": "301 hp", "mpg": "22/32", "transmission": "8-Speed Auto", "drivetrain": "FWD"}'::jsonb),

  ('Toyota', 'Avalon', 2024, 'Limited', 42000, 506, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800', 'sedan', 'gas', 'black', 
   '["Premium Leather", "Ventilated Seats", "Panoramic Moonroof", "JBL Audio"]'::jsonb, 
   '{"horsepower": "301 hp", "mpg": "22/32", "transmission": "8-Speed Auto", "drivetrain": "FWD"}'::jsonb);

-- Toyota Crown (Luxury Hybrid Sedan)
INSERT INTO cars (make, model, year, trim, msrp, monthly_payment, image_url, category, fuel_type, color, features, specs)
VALUES
  ('Toyota', 'Crown', 2024, 'XLE', 41000, 494, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800', 'sedan', 'hybrid', 'white', 
   '["Luxury Hybrid", "AWD Standard", "12.3-inch Display", "Premium Interior"]'::jsonb, 
   '{"horsepower": "236 hp", "mpg": "41/38", "transmission": "CVT", "drivetrain": "AWD"}'::jsonb),

  ('Toyota', 'Crown', 2024, 'Limited', 46000, 554, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800', 'sedan', 'hybrid', 'black', 
   '["Ultimate Luxury", "Semi-Aniline Leather", "Panoramic Roof", "JBL Premium Audio"]'::jsonb, 
   '{"horsepower": "236 hp", "mpg": "41/38", "transmission": "CVT", "drivetrain": "AWD"}'::jsonb);

-- Toyota Prius (Iconic Hybrid)
INSERT INTO cars (make, model, year, trim, msrp, monthly_payment, image_url, category, fuel_type, color, features, specs)
VALUES
  ('Toyota', 'Prius', 2024, 'LE', 28000, 337, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800', 'sedan', 'hybrid', 'white', 
   '["Legendary Efficiency", "Eco Mode", "12.3-inch Display", "Wireless Charging"]'::jsonb, 
   '{"horsepower": "194 hp", "mpg": "57/56", "transmission": "CVT", "drivetrain": "FWD"}'::jsonb),

  ('Toyota', 'Prius', 2024, 'XLE', 32000, 385, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800', 'sedan', 'hybrid', 'silver', 
   '["Premium Hybrid", "SofTex Seats", "Heated Seats", "Premium Audio"]'::jsonb, 
   '{"horsepower": "194 hp", "mpg": "57/56", "transmission": "CVT", "drivetrain": "FWD"}'::jsonb),

  ('Toyota', 'Prius', 2024, 'Limited', 35000, 422, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800', 'sedan', 'hybrid', 'blue', 
   '["Top Luxury Hybrid", "Leather Interior", "Panoramic Roof", "JBL Audio"]'::jsonb, 
   '{"horsepower": "194 hp", "mpg": "57/56", "transmission": "CVT", "drivetrain": "FWD"}'::jsonb);

-- Toyota RAV4 (Compact SUV)
INSERT INTO cars (make, model, year, trim, msrp, monthly_payment, image_url, category, fuel_type, color, features, specs)
VALUES
  ('Toyota', 'RAV4', 2024, 'LE', 30000, 361, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'gas', 'white', 
   '["AWD Standard", "Toyota Safety Sense 2.5", "Multi-Terrain Select", "8-inch Display"]'::jsonb, 
   '{"horsepower": "203 hp", "mpg": "27/35", "transmission": "8-Speed Auto", "drivetrain": "AWD"}'::jsonb),

  ('Toyota', 'RAV4', 2024, 'XLE', 33000, 398, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'gas', 'silver', 
   '["Power Liftgate", "SofTex Seats", "Wireless Charging", "Blind Spot Monitor"]'::jsonb, 
   '{"horsepower": "203 hp", "mpg": "27/35", "transmission": "8-Speed Auto", "drivetrain": "AWD"}'::jsonb),

  ('Toyota', 'RAV4', 2024, 'XLE Premium', 35500, 428, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'gas', 'black', 
   '["Moonroof", "Premium Audio", "Heated Seats", "Power Driver Seat"]'::jsonb, 
   '{"horsepower": "203 hp", "mpg": "27/35", "transmission": "8-Speed Auto", "drivetrain": "AWD"}'::jsonb),

  ('Toyota', 'RAV4', 2024, 'Adventure', 37000, 446, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'gas', 'gray', 
   '["Off-Road Capability", "Roof Rails", "All-Terrain Tires", "Increased Ground Clearance"]'::jsonb, 
   '{"horsepower": "203 hp", "mpg": "25/32", "transmission": "8-Speed Auto", "drivetrain": "AWD"}'::jsonb),

  ('Toyota', 'RAV4', 2024, 'TRD Off-Road', 39000, 470, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'gas', 'white', 
   '["TRD Suspension", "Off-Road Tuned", "Multi-Terrain Monitor", "Red TRD Accents"]'::jsonb, 
   '{"horsepower": "203 hp", "mpg": "25/32", "transmission": "8-Speed Auto", "drivetrain": "AWD"}'::jsonb),

  ('Toyota', 'RAV4', 2024, 'Limited', 40000, 482, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'gas', 'red', 
   '["Luxury SUV", "Leather Interior", "Panoramic Moonroof", "JBL Premium Audio"]'::jsonb, 
   '{"horsepower": "203 hp", "mpg": "27/35", "transmission": "8-Speed Auto", "drivetrain": "AWD"}'::jsonb);

-- Toyota RAV4 Hybrid
INSERT INTO cars (make, model, year, trim, msrp, monthly_payment, image_url, category, fuel_type, color, features, specs)
VALUES
  ('Toyota', 'RAV4 Hybrid', 2024, 'LE', 35000, 422, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'hybrid', 'white', 
   '["Hybrid AWD", "Electronic AWD", "Eco Driving Modes", "Power Flow Display"]'::jsonb, 
   '{"horsepower": "219 hp", "mpg": "41/38", "transmission": "CVT", "drivetrain": "AWD"}'::jsonb),

  ('Toyota', 'RAV4 Hybrid', 2024, 'XLE', 38000, 458, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'hybrid', 'blue', 
   '["Premium Hybrid SUV", "SofTex Interior", "Power Liftgate", "Wireless Charging"]'::jsonb, 
   '{"horsepower": "219 hp", "mpg": "41/38", "transmission": "CVT", "drivetrain": "AWD"}'::jsonb),

  ('Toyota', 'RAV4 Hybrid', 2024, 'XSE', 40000, 482, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'hybrid', 'black', 
   '["Sport Hybrid", "19-inch Wheels", "Sport Seats", "Black Roof"]'::jsonb, 
   '{"horsepower": "219 hp", "mpg": "41/38", "transmission": "CVT", "drivetrain": "AWD"}'::jsonb),

  ('Toyota', 'RAV4 Hybrid', 2024, 'Limited', 42000, 506, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'hybrid', 'silver', 
   '["Luxury Hybrid SUV", "Leather Interior", "Panoramic Moonroof", "JBL Audio"]'::jsonb, 
   '{"horsepower": "219 hp", "mpg": "41/38", "transmission": "CVT", "drivetrain": "AWD"}'::jsonb);

-- Toyota Venza (Premium Hybrid SUV)
INSERT INTO cars (make, model, year, trim, msrp, monthly_payment, image_url, category, fuel_type, color, features, specs)
VALUES
  ('Toyota', 'Venza', 2024, 'LE', 36000, 434, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'hybrid', 'white', 
   '["Hybrid Only", "AWD Standard", "Star Gaze Roof Option", "Premium Design"]'::jsonb, 
   '{"horsepower": "219 hp", "mpg": "40/37", "transmission": "CVT", "drivetrain": "AWD"}'::jsonb),

  ('Toyota', 'Venza', 2024, 'XLE', 39000, 470, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'hybrid', 'gray', 
   '["Premium Hybrid", "SofTex Seats", "12.3-inch Display", "Wireless Charging"]'::jsonb, 
   '{"horsepower": "219 hp", "mpg": "40/37", "transmission": "CVT", "drivetrain": "AWD"}'::jsonb),

  ('Toyota', 'Venza', 2024, 'Limited', 43000, 518, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'hybrid', 'black', 
   '["Luxury Hybrid", "Star Gaze Panoramic Roof", "JBL Audio", "Ventilated Seats"]'::jsonb, 
   '{"horsepower": "219 hp", "mpg": "40/37", "transmission": "CVT", "drivetrain": "AWD"}'::jsonb);

-- Toyota Highlander (Midsize 3-Row SUV)
INSERT INTO cars (make, model, year, trim, msrp, monthly_payment, image_url, category, fuel_type, color, features, specs)
VALUES
  ('Toyota', 'Highlander', 2024, 'L', 38000, 458, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'gas', 'white', 
   '["3-Row Seating", "8 Passengers", "Toyota Safety Sense", "Tri-Zone Climate"]'::jsonb, 
   '{"horsepower": "265 hp", "mpg": "21/29", "transmission": "8-Speed Auto", "drivetrain": "FWD"}'::jsonb),

  ('Toyota', 'Highlander', 2024, 'LE', 42000, 506, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'gas', 'silver', 
   '["AWD Available", "8-inch Touchscreen", "Power Liftgate", "Roof Rails"]'::jsonb, 
   '{"horsepower": "265 hp", "mpg": "21/29", "transmission": "8-Speed Auto", "drivetrain": "AWD"}'::jsonb),

  ('Toyota', 'Highlander', 2024, 'XLE', 46000, 554, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'gas', 'black', 
   '["SofTex Seats", "Power Driver Seat", "Blind Spot Monitor", "Heated Seats"]'::jsonb, 
   '{"horsepower": "265 hp", "mpg": "21/29", "transmission": "8-Speed Auto", "drivetrain": "AWD"}'::jsonb),

  ('Toyota', 'Highlander', 2024, 'Limited', 50000, 602, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'gas', 'gray', 
   '["Premium 3-Row", "Leather Interior", "Panoramic Moonroof", "JBL Audio"]'::jsonb, 
   '{"horsepower": "265 hp", "mpg": "21/29", "transmission": "8-Speed Auto", "drivetrain": "AWD"}'::jsonb),

  ('Toyota', 'Highlander', 2024, 'Platinum', 54000, 651, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'gas', 'white', 
   '["Ultimate Luxury", "Semi-Aniline Leather", "Ventilated Seats", "Premium JBL"]'::jsonb, 
   '{"horsepower": "265 hp", "mpg": "21/29", "transmission": "8-Speed Auto", "drivetrain": "AWD"}'::jsonb);

-- Toyota Highlander Hybrid
INSERT INTO cars (make, model, year, trim, msrp, monthly_payment, image_url, category, fuel_type, color, features, specs)
VALUES
  ('Toyota', 'Highlander Hybrid', 2024, 'LE', 45000, 542, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'hybrid', 'blue', 
   '["3-Row Hybrid", "AWD Standard", "Excellent MPG", "8 Passengers"]'::jsonb, 
   '{"horsepower": "243 hp", "mpg": "36/35", "transmission": "CVT", "drivetrain": "AWD"}'::jsonb),

  ('Toyota', 'Highlander Hybrid', 2024, 'XLE', 49000, 590, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'hybrid', 'white', 
   '["Premium Family Hybrid", "SofTex Interior", "Power Liftgate", "Heated Seats"]'::jsonb, 
   '{"horsepower": "243 hp", "mpg": "36/35", "transmission": "CVT", "drivetrain": "AWD"}'::jsonb),

  ('Toyota', 'Highlander Hybrid', 2024, 'Limited', 53000, 639, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'hybrid', 'black', 
   '["Luxury Hybrid SUV", "Leather Interior", "Panoramic Roof", "JBL Premium Audio"]'::jsonb, 
   '{"horsepower": "243 hp", "mpg": "36/35", "transmission": "CVT", "drivetrain": "AWD"}'::jsonb);

-- Toyota 4Runner (Off-Road SUV)
INSERT INTO cars (make, model, year, trim, msrp, monthly_payment, image_url, category, fuel_type, color, features, specs)
VALUES
  ('Toyota', '4Runner', 2024, 'SR5', 42000, 506, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'gas', 'white', 
   '["Body-on-Frame", "4WD", "Multi-Terrain Select", "Off-Road Capable"]'::jsonb, 
   '{"horsepower": "270 hp", "mpg": "16/19", "transmission": "5-Speed Auto", "drivetrain": "4WD"}'::jsonb),

  ('Toyota', '4Runner', 2024, 'TRD Off-Road', 45000, 542, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'gas', 'black', 
   '["TRD Suspension", "Crawl Control", "Multi-Terrain Monitor", "Locking Rear Diff"]'::jsonb, 
   '{"horsepower": "270 hp", "mpg": "16/19", "transmission": "5-Speed Auto", "drivetrain": "4WD"}'::jsonb),

  ('Toyota', '4Runner', 2024, 'TRD Pro', 56000, 675, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'gas', 'gray', 
   '["Ultimate Off-Road", "Fox Shocks", "TRD Pro Wheels", "Roof Rack", "Skid Plates"]'::jsonb, 
   '{"horsepower": "270 hp", "mpg": "16/19", "transmission": "5-Speed Auto", "drivetrain": "4WD"}'::jsonb),

  ('Toyota', '4Runner', 2024, 'Limited', 50000, 602, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'gas', 'silver', 
   '["Luxury Off-Road", "Leather Seats", "JBL Audio", "X-REAS Suspension"]'::jsonb, 
   '{"horsepower": "270 hp", "mpg": "16/19", "transmission": "5-Speed Auto", "drivetrain": "4WD"}'::jsonb);

-- Toyota Sequoia (Full-Size 3-Row SUV)
INSERT INTO cars (make, model, year, trim, msrp, monthly_payment, image_url, category, fuel_type, color, features, specs)
VALUES
  ('Toyota', 'Sequoia', 2024, 'SR5', 62000, 747, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'gas', 'white', 
   '["Full-Size Power", "8 Passengers", "Towing Capacity 9000 lbs", "i-FORCE MAX Hybrid"]'::jsonb, 
   '{"horsepower": "437 hp", "mpg": "19/22", "transmission": "10-Speed Auto", "drivetrain": "4WD"}'::jsonb),

  ('Toyota', 'Sequoia', 2024, 'Limited', 70000, 843, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'gas', 'black', 
   '["Luxury Full-Size", "Leather Interior", "Panoramic Moonroof", "JBL Audio"]'::jsonb, 
   '{"horsepower": "437 hp", "mpg": "19/22", "transmission": "10-Speed Auto", "drivetrain": "4WD"}'::jsonb);

-- Toyota Sienna (Hybrid Minivan)
INSERT INTO cars (make, model, year, trim, msrp, monthly_payment, image_url, category, fuel_type, color, features, specs)
VALUES
  ('Toyota', 'Sienna', 2024, 'LE', 39000, 470, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'van', 'hybrid', 'white', 
   '["Hybrid Only Minivan", "8 Passengers", "AWD Available", "Family Perfect"]'::jsonb, 
   '{"horsepower": "245 hp", "mpg": "36/36", "transmission": "CVT", "drivetrain": "FWD"}'::jsonb),

  ('Toyota', 'Sienna', 2024, 'XLE', 44000, 530, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'van', 'hybrid', 'silver', 
   '["Premium Family Van", "Captain Chairs", "Power Sliding Doors", "Moonroof"]'::jsonb, 
   '{"horsepower": "245 hp", "mpg": "36/36", "transmission": "CVT", "drivetrain": "AWD"}'::jsonb),

  ('Toyota', 'Sienna', 2024, 'Limited', 50000, 602, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'van', 'hybrid', 'black', 
   '["Luxury Minivan", "Premium Leather", "JBL Audio", "Dual Moonroofs"]'::jsonb, 
   '{"horsepower": "245 hp", "mpg": "36/36", "transmission": "CVT", "drivetrain": "AWD"}'::jsonb),

  ('Toyota', 'Sienna', 2024, 'Platinum', 54000, 651, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'van', 'hybrid', 'gray', 
   '["Ultimate Family Luxury", "Ottoman Seats", "Rear Entertainment", "Premium Interior"]'::jsonb, 
   '{"horsepower": "245 hp", "mpg": "36/36", "transmission": "CVT", "drivetrain": "AWD"}'::jsonb);

-- Toyota Tacoma (Midsize Truck)
INSERT INTO cars (make, model, year, trim, msrp, monthly_payment, image_url, category, fuel_type, color, features, specs)
VALUES
  ('Toyota', 'Tacoma', 2024, 'SR', 32000, 386, 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800', 'truck', 'gas', 'white', 
   '["Legendary Reliability", "4x4 Available", "Towing Capacity", "Bed Liner"]'::jsonb, 
   '{"horsepower": "278 hp", "mpg": "19/24", "transmission": "6-Speed Auto", "drivetrain": "4WD"}'::jsonb),

  ('Toyota', 'Tacoma', 2024, 'SR5', 36000, 434, 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800', 'truck', 'gas', 'silver', 
   '["Popular Trim", "8-inch Touchscreen", "Rear Camera", "LED Headlights"]'::jsonb, 
   '{"horsepower": "278 hp", "mpg": "19/24", "transmission": "6-Speed Auto", "drivetrain": "4WD"}'::jsonb),

  ('Toyota', 'Tacoma', 2024, 'TRD Sport', 41000, 494, 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800', 'truck', 'gas', 'black', 
   '["Sport Suspension", "Hood Scoop", "Sport Seats", "TRD Styling"]'::jsonb, 
   '{"horsepower": "278 hp", "mpg": "19/23", "transmission": "6-Speed Auto", "drivetrain": "4WD"}'::jsonb),

  ('Toyota', 'Tacoma', 2024, 'TRD Off-Road', 42000, 506, 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800', 'truck', 'gas', 'gray', 
   '["Off-Road Package", "Crawl Control", "Multi-Terrain Select", "Locking Rear Diff"]'::jsonb, 
   '{"horsepower": "278 hp", "mpg": "18/22", "transmission": "6-Speed Auto", "drivetrain": "4WD"}'::jsonb),

  ('Toyota', 'Tacoma', 2024, 'TRD Pro', 52000, 627, 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800', 'truck', 'gas', 'white', 
   '["Ultimate Off-Road Truck", "Fox Shocks", "TRD Pro Wheels", "Skid Plates"]'::jsonb, 
   '{"horsepower": "278 hp", "mpg": "18/22", "transmission": "6-Speed Auto", "drivetrain": "4WD"}'::jsonb);

-- Toyota Tundra (Full-Size Truck)
INSERT INTO cars (make, model, year, trim, msrp, monthly_payment, image_url, category, fuel_type, color, features, specs)
VALUES
  ('Toyota', 'Tundra', 2024, 'SR5', 48000, 578, 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800', 'truck', 'gas', 'white', 
   '["Full-Size Power", "i-FORCE MAX Available", "Towing 12000 lbs", "Bed Lighting"]'::jsonb, 
   '{"horsepower": "389 hp", "mpg": "18/22", "transmission": "10-Speed Auto", "drivetrain": "4WD"}'::jsonb),

  ('Toyota', 'Tundra', 2024, 'Limited', 58000, 699, 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800', 'truck', 'gas', 'black', 
   '["Premium Truck", "Leather Interior", "Panoramic View Monitor", "JBL Audio"]'::jsonb, 
   '{"horsepower": "389 hp", "mpg": "18/22", "transmission": "10-Speed Auto", "drivetrain": "4WD"}'::jsonb),

  ('Toyota', 'Tundra', 2024, 'Platinum', 64000, 771, 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800', 'truck', 'gas', 'silver', 
   '["Luxury Full-Size Truck", "Premium Leather", "Ventilated Seats", "Premium JBL"]'::jsonb, 
   '{"horsepower": "389 hp", "mpg": "18/22", "transmission": "10-Speed Auto", "drivetrain": "4WD"}'::jsonb),

  ('Toyota', 'Tundra', 2024, 'TRD Pro', 72000, 867, 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800', 'truck', 'gas', 'gray', 
   '["Off-Road Beast", "Fox Shocks", "TRD Pro Package", "Skid Plates", "Lift Kit"]'::jsonb, 
   '{"horsepower": "389 hp", "mpg": "17/20", "transmission": "10-Speed Auto", "drivetrain": "4WD"}'::jsonb);

-- Toyota bZ4X (Electric SUV)
INSERT INTO cars (make, model, year, trim, msrp, monthly_payment, image_url, category, fuel_type, color, features, specs)
VALUES
  ('Toyota', 'bZ4X', 2024, 'XLE', 45000, 542, 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800', 'suv', 'electric', 'white', 
   '["All-Electric", "Fast Charging", "252 Mile Range", "Regenerative Braking"]'::jsonb, 
   '{"horsepower": "201 hp", "range": "252 miles", "transmission": "Single-Speed", "drivetrain": "AWD"}'::jsonb),

  ('Toyota', 'bZ4X', 2024, 'Limited', 50000, 602, 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800', 'suv', 'electric', 'black', 
   '["Premium Electric", "Radiant Heating", "Solar Roof", "Premium Interior"]'::jsonb, 
   '{"horsepower": "201 hp", "range": "228 miles", "transmission": "Single-Speed", "drivetrain": "AWD"}'::jsonb);

-- Toyota GR86 (Sports Car)
INSERT INTO cars (make, model, year, trim, msrp, monthly_payment, image_url, category, fuel_type, color, features, specs)
VALUES
  ('Toyota', 'GR86', 2024, 'Base', 30000, 361, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800', 'sports', 'gas', 'red', 
   '["Pure Driving Fun", "RWD", "Manual Available", "Sport Tuned"]'::jsonb, 
   '{"horsepower": "228 hp", "mpg": "21/31", "transmission": "6-Speed Manual", "drivetrain": "RWD"}'::jsonb),

  ('Toyota', 'GR86', 2024, 'Premium', 33000, 398, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800', 'sports', 'gas', 'blue', 
   '["Premium Sport", "Alcantara Trim", "Upgraded Audio", "Sport Seats"]'::jsonb, 
   '{"horsepower": "228 hp", "mpg": "21/31", "transmission": "6-Speed Auto", "drivetrain": "RWD"}'::jsonb);

-- Toyota GR Supra (Sports Car)
INSERT INTO cars (make, model, year, trim, msrp, monthly_payment, image_url, category, fuel_type, color, features, specs)
VALUES
  ('Toyota', 'GR Supra', 2024, '2.0', 46000, 554, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800', 'sports', 'gas', 'white', 
   '["Turbocharged", "Sport Tuned Suspension", "Launch Control", "Track Ready"]'::jsonb, 
   '{"horsepower": "255 hp", "mpg": "25/32", "transmission": "8-Speed Auto", "drivetrain": "RWD"}'::jsonb),

  ('Toyota', 'GR Supra', 2024, '3.0', 56000, 675, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800', 'sports', 'gas', 'red', 
   '["Inline-6 Turbo", "382 HP", "Performance Exhaust", "Adaptive Suspension"]'::jsonb, 
   '{"horsepower": "382 hp", "mpg": "22/30", "transmission": "8-Speed Auto", "drivetrain": "RWD"}'::jsonb),

  ('Toyota', 'GR Supra', 2024, '3.0 Premium', 60000, 723, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800', 'sports', 'gas', 'black', 
   '["Premium Performance", "Leather Interior", "JBL Audio", "Head-Up Display"]'::jsonb, 
   '{"horsepower": "382 hp", "mpg": "22/30", "transmission": "8-Speed Auto", "drivetrain": "RWD"}'::jsonb);
