import { Cart } from '../../type';
import { supabase } from '../constants/api';

export const getCarts = async (): Promise<Cart[]> => {
  const { data, error } = await supabase.from('carts').select('*');

  if (error) {
    throw new Error(error.message);
  }

  return data as Cart[];
};

export const getCartById = async (id: number): Promise<Cart> => {
  const { data, error } = await supabase
    .from('carts')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data as Cart;
};

export const deleteCart = async (id: number): Promise<void> => {
  const { error } = await supabase.from('carts').delete().eq('id', id);

  if (error) {
    throw new Error(error.message);
  }
};

export const createCartProduct = async (
  cart: Omit<Cart, 'id'>
): Promise<Cart> => {
  const { data, error } = await supabase.from('carts').insert(cart).single();

  if (error) {
    throw new Error(error.message);
  }

  return data as Cart;
};

export const updateCartProduct = async (
  updateCart: Cart | Partial<Cart>,
  id?: number
): Promise<Cart> => {
  const cartId = id ?? updateCart.id; // id가 없으면 updateCart에서 id 추출
  if (!cartId) {
    throw new Error('Cart ID is required.');
  }

  const { data, error } = await supabase
    .from('carts')
    .update(updateCart)
    .eq('id', cartId)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data as Cart;
};
