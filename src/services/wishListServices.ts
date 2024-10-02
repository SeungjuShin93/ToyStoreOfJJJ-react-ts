import { WishList } from '../../type';
import { supabase } from '../constants/api';

export const getWishLists = async (): Promise<WishList[]> => {
  const { data, error } = await supabase.from('wishLists').select('*');

  if (error) {
    throw new Error(error.message);
  }

  return data as WishList[];
};

export const getWishListsByUserAndProduct = async (
  userId: number,
  productId: number
): Promise<WishList[]> => {
  const { data, error } = await supabase
    .from('wishLists')
    .select('*')
    .match({ userId, productId });

  if (error) {
    throw new Error(error.message);
  }

  return data as WishList[];
};

export const deleteWishList = async (id: number): Promise<void> => {
  const { error } = await supabase.from('wishLists').delete().eq('id', id);

  if (error) {
    throw new Error(error.message);
  }
};

export const createWishList = async (
  wishList: Omit<WishList, 'id'>
): Promise<WishList> => {
  const { data, error } = await supabase
    .from('wishLists')
    .insert(wishList)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data as WishList;
};
