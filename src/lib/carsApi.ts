import { supabase, Car } from './supabase';

export interface CarFilters {
  minPayment?: number;
  maxPayment?: number;
  category?: string;
  fuelType?: string;
  color?: string;
  model?: string;
  excludeIds?: string[];
}

export async function getCars(filters: CarFilters = {}): Promise<Car[]> {
  let query = supabase
    .from('cars')
    .select('*')
    .order('monthly_payment', { ascending: true });

  if (filters.minPayment !== undefined) {
    query = query.gte('monthly_payment', filters.minPayment);
  }

  if (filters.maxPayment !== undefined) {
    query = query.lte('monthly_payment', filters.maxPayment);
  }

  if (filters.category) {
    query = query.eq('category', filters.category);
  }

  if (filters.fuelType) {
    query = query.eq('fuel_type', filters.fuelType);
  }

  if (filters.color) {
    query = query.eq('color', filters.color);
  }

  if (filters.model) {
    query = query.eq('model', filters.model);
  }

  if (filters.excludeIds && filters.excludeIds.length > 0) {
    query = query.not('id', 'in', `(${filters.excludeIds.join(',')})`);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching cars:', error);
    throw error;
  }

  return data || [];
}

export async function getCarById(id: string): Promise<Car | null> {
  const { data, error } = await supabase
    .from('cars')
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error) {
    console.error('Error fetching car:', error);
    throw error;
  }

  return data;
}
