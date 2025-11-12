CREATE TABLE IF NOT EXISTS user_financial_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL,
  annual_income numeric DEFAULT 0,
  monthly_income numeric DEFAULT 0,
  monthly_rent_mortgage numeric DEFAULT 0,
  monthly_utilities numeric DEFAULT 0,
  monthly_groceries numeric DEFAULT 0,
  monthly_insurance numeric DEFAULT 0,
  monthly_debt_payments numeric DEFAULT 0,
  monthly_other_expenses numeric DEFAULT 0,
  savings_goal_percentage numeric DEFAULT 10,
  emergency_fund numeric DEFAULT 0,
  credit_score_range text DEFAULT 'Good',
  down_payment_available numeric DEFAULT 0,
  calculated_max_payment numeric DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE user_financial_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create financial profiles"
  ON user_financial_profiles
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Users can read own financial profiles"
  ON user_financial_profiles
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Users can update own financial profiles"
  ON user_financial_profiles
  FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_financial_profiles_session 
  ON user_financial_profiles(session_id);
