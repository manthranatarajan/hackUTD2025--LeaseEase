
-- Add Toyota Sedans
INSERT INTO cars (make, model, year, trim, msrp, monthly_payment, image_url, category, fuel_type, color, features, specs)
VALUES
  ('Toyota', 'Corolla', 2024, 'LE', 24000, 289, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800', 'sedan', 'gas', 'white', 
   '["Lane Departure Alert", "Adaptive Cruise Control", "Apple CarPlay"]'::jsonb, 
   '{"horsepower": "169 hp", "mpg": "32/41", "transmission": "CVT", "drivetrain": "FWD"}'::jsonb),
  
  ('Toyota', 'Corolla', 2024, 'SE', 26500, 319, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800', 'sedan', 'gas', 'red', 
   '["Sport Suspension", "LED Headlights", "Heated Seats"]'::jsonb, 
   '{"horsepower": "169 hp", "mpg": "31/40", "transmission": "CVT", "drivetrain": "FWD"}'::jsonb),

  ('Toyota', 'Camry', 2024, 'SE', 29500, 355, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800', 'sedan', 'gas', 'silver', 
   '["Sport Mode", "Dual-Zone Climate", "Blind Spot Monitor"]'::jsonb, 
   '{"horsepower": "203 hp", "mpg": "28/39", "transmission": "8-Speed Auto", "drivetrain": "FWD"}'::jsonb),

  ('Toyota', 'Camry', 2024, 'XSE', 32000, 385, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800', 'sedan', 'gas', 'blue', 
   '["Paddle Shifters", "Sport Seats", "Premium Audio"]'::jsonb, 
   '{"horsepower": "203 hp", "mpg": "28/39", "transmission": "8-Speed Auto", "drivetrain": "FWD"}'::jsonb),

  ('Honda', 'Civic', 2024, 'LX', 24500, 295, 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800', 'sedan', 'gas', 'black', 
   '["Honda Sensing", "Multi-Angle Camera", "LED Daytime Lights"]'::jsonb, 
   '{"horsepower": "158 hp", "mpg": "31/40", "transmission": "CVT", "drivetrain": "FWD"}'::jsonb),

  ('Honda', 'Civic', 2024, 'Sport', 27500, 330, 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800', 'sedan', 'gas', 'white', 
   '["Sport Pedals", "18\" Alloy Wheels", "Sport Grille"]'::jsonb, 
   '{"horsepower": "180 hp", "mpg": "30/37", "transmission": "CVT", "drivetrain": "FWD"}'::jsonb),

  ('Honda', 'Accord', 2024, 'LX', 28000, 340, 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800', 'sedan', 'gas', 'gray', 
   '["Smartphone Integration", "Auto High Beams", "Walk Away Lock"]'::jsonb, 
   '{"horsepower": "192 hp", "mpg": "29/37", "transmission": "CVT", "drivetrain": "FWD"}'::jsonb),

  ('Honda', 'Accord', 2024, 'Sport', 31000, 375, 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800', 'sedan', 'gas', 'red', 
   '["Sport Seats", "Dual Exhaust", "Sport Suspension"]'::jsonb, 
   '{"horsepower": "192 hp", "mpg": "29/37", "transmission": "CVT", "drivetrain": "FWD"}'::jsonb),

  ('Nissan', 'Altima', 2024, 'S', 26500, 320, 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800', 'sedan', 'gas', 'silver', 
   '["ProPILOT Assist", "Automatic Emergency Braking", "Rear Door Alert"]'::jsonb, 
   '{"horsepower": "188 hp", "mpg": "28/39", "transmission": "CVT", "drivetrain": "FWD"}'::jsonb),

  ('Nissan', 'Altima', 2024, 'SV', 29000, 350, 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800', 'sedan', 'gas', 'white', 
   '["Moonroof", "Remote Start", "Heated Mirrors"]'::jsonb, 
   '{"horsepower": "188 hp", "mpg": "28/39", "transmission": "CVT", "drivetrain": "FWD"}'::jsonb),

  ('Mazda', 'Mazda3', 2024, 'Select', 25000, 300, 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800', 'sedan', 'gas', 'blue', 
   '["i-Activsense Safety", "MAZDA CONNECT", "Push Button Start"]'::jsonb, 
   '{"horsepower": "191 hp", "mpg": "28/36", "transmission": "6-Speed Auto", "drivetrain": "FWD"}'::jsonb),

  ('Mazda', 'Mazda3', 2024, 'Premium', 28000, 340, 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800', 'sedan', 'gas', 'black', 
   '["Leather Seats", "Bose Audio", "Head-Up Display"]'::jsonb, 
   '{"horsepower": "191 hp", "mpg": "27/35", "transmission": "6-Speed Auto", "drivetrain": "AWD"}'::jsonb),

  ('Toyota', 'RAV4', 2024, 'LE', 30000, 360, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'gas', 'white', 
   '["All-Wheel Drive", "Toyota Safety Sense", "Multi-Terrain Select"]'::jsonb, 
   '{"horsepower": "203 hp", "mpg": "27/35", "transmission": "8-Speed Auto", "drivetrain": "AWD"}'::jsonb),

  ('Toyota', 'RAV4', 2024, 'XLE', 33000, 398, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'gas', 'silver', 
   '["Power Liftgate", "SofTex Seats", "Wireless Charging"]'::jsonb, 
   '{"horsepower": "203 hp", "mpg": "27/35", "transmission": "8-Speed Auto", "drivetrain": "AWD"}'::jsonb),

  ('Toyota', 'RAV4', 2024, 'Adventure', 37000, 445, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'gas', 'gray', 
   '["Off-Road Capability", "Roof Rails", "All-Terrain Tires"]'::jsonb, 
   '{"horsepower": "203 hp", "mpg": "25/32", "transmission": "8-Speed Auto", "drivetrain": "AWD"}'::jsonb),

  ('Toyota', 'Highlander', 2024, 'LE', 42000, 505, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'gas', 'black', 
   '["3-Row Seating", "Tri-Zone Climate", "Towing Package"]'::jsonb, 
   '{"horsepower": "265 hp", "mpg": "21/29", "transmission": "8-Speed Auto", "drivetrain": "AWD"}'::jsonb),

  ('Toyota', 'Highlander', 2024, 'XLE', 46000, 555, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'gas', 'white', 
   '["Leather Interior", "Panoramic Moonroof", "Premium Audio"]'::jsonb, 
   '{"horsepower": "265 hp", "mpg": "21/29", "transmission": "8-Speed Auto", "drivetrain": "AWD"}'::jsonb),

  ('Honda', 'CR-V', 2024, 'LX', 31000, 375, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'gas', 'blue', 
   '["Honda Sensing", "Real Time AWD", "Cargo Space"]'::jsonb, 
   '{"horsepower": "190 hp", "mpg": "28/34", "transmission": "CVT", "drivetrain": "AWD"}'::jsonb),

  ('Honda', 'CR-V', 2024, 'EX', 34000, 410, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'gas', 'red', 
   '["Power Moonroof", "Hands-Free Liftgate", "Heated Seats"]'::jsonb, 
   '{"horsepower": "190 hp", "mpg": "27/32", "transmission": "CVT", "drivetrain": "AWD"}'::jsonb),

  ('Honda', 'Pilot', 2024, 'Sport', 42000, 505, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'gas', 'black', 
   '["8-Passenger Seating", "Tri-Zone Climate", "Towing Capacity"]'::jsonb, 
   '{"horsepower": "280 hp", "mpg": "20/27", "transmission": "9-Speed Auto", "drivetrain": "AWD"}'::jsonb),

  ('Honda', 'Pilot', 2024, 'Touring', 48000, 580, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'gas', 'silver', 
   '["Leather Trimmed Seats", "Navigation", "Wireless Charging"]'::jsonb, 
   '{"horsepower": "280 hp", "mpg": "20/27", "transmission": "9-Speed Auto", "drivetrain": "AWD"}'::jsonb),

  ('Nissan', 'Rogue', 2024, 'S', 29000, 350, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'gas', 'white', 
   '["ProPILOT Assist", "Intelligent AWD", "Rear Door Alert"]'::jsonb, 
   '{"horsepower": "201 hp", "mpg": "30/37", "transmission": "CVT", "drivetrain": "AWD"}'::jsonb),

  ('Nissan', 'Rogue', 2024, 'SV', 32000, 385, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'gas', 'gray', 
   '["Panoramic Moonroof", "Motion Activated Liftgate", "Remote Start"]'::jsonb, 
   '{"horsepower": "201 hp", "mpg": "30/37", "transmission": "CVT", "drivetrain": "AWD"}'::jsonb),

  ('Mazda', 'CX-5', 2024, 'Select', 30000, 360, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'gas', 'red', 
   '["i-Activsense Safety", "Smart City Brake", "MAZDA CONNECT"]'::jsonb, 
   '{"horsepower": "187 hp", "mpg": "25/31", "transmission": "6-Speed Auto", "drivetrain": "AWD"}'::jsonb),

  ('Mazda', 'CX-5', 2024, 'Premium', 35000, 422, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'gas', 'black', 
   '["Turbo Engine", "Leather Seats", "Bose Audio"]'::jsonb, 
   '{"horsepower": "227 hp", "mpg": "22/27", "transmission": "6-Speed Auto", "drivetrain": "AWD"}'::jsonb),

  ('Mazda', 'CX-9', 2024, 'Touring', 42000, 505, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'gas', 'white', 
   '["3-Row Seating", "Power Liftgate", "Heated Steering Wheel"]'::jsonb, 
   '{"horsepower": "250 hp", "mpg": "20/26", "transmission": "6-Speed Auto", "drivetrain": "AWD"}'::jsonb),

  ('Toyota', 'Tacoma', 2024, 'SR5', 36000, 435, 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800', 'truck', 'gas', 'silver', 
   '["4x4 Off-Road", "Towing Package", "Bed Liner"]'::jsonb, 
   '{"horsepower": "278 hp", "mpg": "19/24", "transmission": "6-Speed Auto", "drivetrain": "4WD"}'::jsonb),

  ('Toyota', 'Tacoma', 2024, 'TRD Sport', 41000, 495, 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800', 'truck', 'gas', 'black', 
   '["Sport Suspension", "Hood Scoop", "LED Headlights"]'::jsonb, 
   '{"horsepower": "278 hp", "mpg": "19/23", "transmission": "6-Speed Auto", "drivetrain": "4WD"}'::jsonb),

  ('Toyota', 'Tundra', 2024, 'SR5', 48000, 580, 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800', 'truck', 'gas', 'white', 
   '["Full-Size Power", "Tow Package", "Bed Lighting"]'::jsonb, 
   '{"horsepower": "389 hp", "mpg": "18/22", "transmission": "10-Speed Auto", "drivetrain": "4WD"}'::jsonb),

  ('Toyota', 'Tundra', 2024, 'Limited', 58000, 700, 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800', 'truck', 'gas', 'gray', 
   '["Premium Interior", "Panoramic View Monitor", "JBL Audio"]'::jsonb, 
   '{"horsepower": "389 hp", "mpg": "18/22", "transmission": "10-Speed Auto", "drivetrain": "4WD"}'::jsonb),

  ('Honda', 'Ridgeline', 2024, 'Sport', 40000, 480, 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800', 'truck', 'gas', 'blue', 
   '["In-Bed Trunk", "Dual-Action Tailgate", "Truck Bed Audio"]'::jsonb, 
   '{"horsepower": "280 hp", "mpg": "18/24", "transmission": "9-Speed Auto", "drivetrain": "AWD"}'::jsonb),

  ('Honda', 'Ridgeline', 2024, 'RTL-E', 46000, 555, 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800', 'truck', 'gas', 'red', 
   '["Leather Interior", "Navigation", "Wireless Charging"]'::jsonb, 
   '{"horsepower": "280 hp", "mpg": "18/24", "transmission": "9-Speed Auto", "drivetrain": "AWD"}'::jsonb),

  ('Nissan', 'Frontier', 2024, 'SV', 35000, 422, 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800', 'truck', 'gas', 'black', 
   '["Pro-4X Off-Road", "Hill Start Assist", "Towing Capacity"]'::jsonb, 
   '{"horsepower": "310 hp", "mpg": "18/24", "transmission": "9-Speed Auto", "drivetrain": "4WD"}'::jsonb),

  ('Nissan', 'Frontier', 2024, 'PRO-4X', 41000, 495, 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800', 'truck', 'gas', 'white', 
   '["Off-Road Package", "Bilstein Shocks", "All-Terrain Tires"]'::jsonb, 
   '{"horsepower": "310 hp", "mpg": "17/22", "transmission": "9-Speed Auto", "drivetrain": "4WD"}'::jsonb),

  ('Toyota', 'Prius', 2024, 'LE', 28000, 340, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800', 'sedan', 'hybrid', 'white', 
   '["Hybrid Efficiency", "Eco Mode", "Regenerative Braking"]'::jsonb, 
   '{"horsepower": "194 hp", "mpg": "57/56", "transmission": "CVT", "drivetrain": "FWD"}'::jsonb),

  ('Toyota', 'Prius', 2024, 'XLE', 32000, 385, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800', 'sedan', 'hybrid', 'silver', 
   '["Premium Hybrid", "Heated Seats", "Wireless Charging"]'::jsonb, 
   '{"horsepower": "194 hp", "mpg": "57/56", "transmission": "CVT", "drivetrain": "FWD"}'::jsonb),

  ('Toyota', 'Camry Hybrid', 2024, 'LE', 31000, 375, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800', 'sedan', 'hybrid', 'blue', 
   '["Hybrid Synergy Drive", "EV Mode", "Eco Dashboard"]'::jsonb, 
   '{"horsepower": "208 hp", "mpg": "51/53", "transmission": "CVT", "drivetrain": "FWD"}'::jsonb),

  ('Toyota', 'Camry Hybrid', 2024, 'XLE', 35000, 422, 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800', 'sedan', 'hybrid', 'black', 
   '["Premium Hybrid", "Power Seat", "Dual-Zone Climate"]'::jsonb, 
   '{"horsepower": "208 hp", "mpg": "51/53", "transmission": "CVT", "drivetrain": "FWD"}'::jsonb),

  ('Toyota', 'RAV4 Hybrid', 2024, 'LE', 35000, 422, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'hybrid', 'gray', 
   '["Hybrid AWD", "Electronic AWD", "Eco Driving Modes"]'::jsonb, 
   '{"horsepower": "219 hp", "mpg": "41/38", "transmission": "CVT", "drivetrain": "AWD"}'::jsonb),

  ('Toyota', 'RAV4 Hybrid', 2024, 'XLE', 38000, 458, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'hybrid', 'white', 
   '["Premium Hybrid SUV", "SofTex Interior", "Power Liftgate"]'::jsonb, 
   '{"horsepower": "219 hp", "mpg": "41/38", "transmission": "CVT", "drivetrain": "AWD"}'::jsonb),

  ('Honda', 'CR-V Hybrid', 2024, 'Sport', 36000, 435, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'hybrid', 'red', 
   '["Hybrid Performance", "Sport Mode", "Real Time AWD"]'::jsonb, 
   '{"horsepower": "204 hp", "mpg": "40/35", "transmission": "CVT", "drivetrain": "AWD"}'::jsonb),

  ('Honda', 'CR-V Hybrid', 2024, 'Touring', 41000, 495, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', 'suv', 'hybrid', 'silver', 
   '["Premium Hybrid", "Leather Seats", "Navigation"]'::jsonb, 
   '{"horsepower": "204 hp", "mpg": "40/35", "transmission": "CVT", "drivetrain": "AWD"}'::jsonb),

  ('Toyota', 'bZ4X', 2024, 'XLE', 45000, 542, 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800', 'suv', 'electric', 'white', 
   '["All-Electric", "Fast Charging", "Regenerative Braking"]'::jsonb, 
   '{"horsepower": "201 hp", "range": "252 miles", "transmission": "Single-Speed", "drivetrain": "AWD"}'::jsonb),

  ('Toyota', 'bZ4X', 2024, 'Limited', 50000, 602, 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800', 'suv', 'electric', 'black', 
   '["Premium Electric", "Radiant Heating", "Solar Roof"]'::jsonb, 
   '{"horsepower": "201 hp", "range": "228 miles", "transmission": "Single-Speed", "drivetrain": "AWD"}'::jsonb);
