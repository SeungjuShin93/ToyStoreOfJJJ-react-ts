import {
  Category,
  AgeCategory,
  ProductCategory,
  ProductAgeCategory,
} from '../../type';
import { supabase } from '../constants/api';

export const getCategories = async (): Promise<Category[]> => {
  const { data, error } = await supabase.from('categories').select('*');

  if (error) {
    throw new Error(error.message);
  }

  return data as Category[];
};

export const getProductCategories = async (): Promise<ProductCategory[]> => {
  const { data, error } = await supabase.from('productCategories').select('*');

  if (error) {
    throw new Error(error.message);
  }

  return data as ProductCategory[];
};

export const getAgeCategories = async (): Promise<AgeCategory[]> => {
  const { data, error } = await supabase.from('ageCategories').select('*');

  if (error) {
    throw new Error(error.message);
  }

  return data as AgeCategory[];
};

export const getProductAgeCategory = async (): Promise<
  ProductAgeCategory[]
> => {
  const { data, error } = await supabase
    .from('productAgeCategories')
    .select('*');

  if (error) {
    throw new Error(error.message);
  }

  return data as ProductAgeCategory[];
};
