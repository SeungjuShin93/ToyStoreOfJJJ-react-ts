import { UsedProduct, UsedProductImage } from '../../type';
import { supabase } from '../constants/api';

export const getUsedProducts = async (): Promise<UsedProduct[]> => {
  const { data, error } = await supabase.from('usedProducts').select('*');

  if (error) {
    throw new Error(error.message);
  }

  return data as UsedProduct[];
};

export const getUsedProductById = async (id: number): Promise<UsedProduct> => {
  const { data, error } = await supabase
    .from('usedProducts')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data as UsedProduct;
};

export const getUsedProductImages = async (): Promise<UsedProductImage[]> => {
  const { data, error } = await supabase.from('usedProductImages').select('*');

  if (error) {
    throw new Error(error.message);
  }

  return data as UsedProductImage[];
};

export const deleteUsedProduct = async (id: number): Promise<void> => {
  const { error } = await supabase.from('usedProducts').delete().eq('id', id);

  if (error) {
    throw new Error(error.message);
  }
};

export const createUsedProduct = async (
  usedProduct: Omit<UsedProduct, 'id'>
): Promise<UsedProduct> => {
  const { data, error } = await supabase
    .from('usedProducts')
    .insert(usedProduct)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data as UsedProduct;
};

export const updateUsedProduct = async (
  id: number,
  usedProduct: Partial<UsedProduct>
): Promise<UsedProduct> => {
  const { data, error } = await supabase
    .from('usedProducts')
    .update(usedProduct)
    .eq('id', id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data as UsedProduct;
};
