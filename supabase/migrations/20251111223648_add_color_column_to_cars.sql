-- Add color column
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'cars' AND column_name = 'color'
  ) THEN
    ALTER TABLE cars ADD COLUMN color text DEFAULT 'black';
  END IF;
END $$;

-- Update existing vehicles with realistic colors
UPDATE cars SET color = 'black' WHERE id IN (
  SELECT id FROM cars LIMIT 3
);

UPDATE cars SET color = 'white' WHERE id IN (
  SELECT id FROM cars WHERE color = 'black' ORDER BY monthly_payment OFFSET 3 LIMIT 3
);

UPDATE cars SET color = 'silver' WHERE id IN (
  SELECT id FROM cars WHERE color = 'black' ORDER BY monthly_payment OFFSET 6 LIMIT 3
);

UPDATE cars SET color = 'red' WHERE id IN (
  SELECT id FROM cars WHERE color = 'black' ORDER BY monthly_payment OFFSET 9 LIMIT 3
);
