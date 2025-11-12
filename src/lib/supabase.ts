import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  trim: string;
  msrp: number;
  monthly_payment: number;
  image_url: string;
  category: string;
  fuel_type: string;
  color: string;
  features: string[];
  specs: {
    horsepower?: string;
    mpg?: string;
    range?: string;
    transmission?: string;
    drivetrain?: string;
  };
  created_at: string;
  updated_at: string;
}
