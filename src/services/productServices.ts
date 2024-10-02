import { Product, ProductImage, SliderImages } from '../../type';
import { supabase } from '../constants/api';

export const getProducts = async (): Promise<Product[]> => {
  const { data, error } = await supabase.from('products').select('*');

  if (error) {
    throw new Error(error.message);
  }
  return data as Product[];
};

export const getProductById = async (productId: number): Promise<Product> => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', productId)
    .single();

  if (error) {
    throw new Error(error.message);
  }
  return data as Product;
};

export const getProductImages = async (): Promise<ProductImage[]> => {
  const { data, error } = await supabase.from('productImages').select('*');

  if (error) {
    throw new Error(error.message);
  }
  return data as ProductImage[];
};

export const getProductImagesByProductId = async (
  productId: number
): Promise<ProductImage[]> => {
  const { data, error } = await supabase
    .from('productImages')
    .select('*')
    .eq('productId', productId);

  if (error) {
    throw new Error(error.message);
  }

  return data as ProductImage[];
};

export const getSliderImages = async (): Promise<SliderImages[]> => {
  const { data, error } = await supabase.from('sliderImages').select('*');

  if (error) {
    throw new Error(error.message);
  }
  return data as SliderImages[];
};
