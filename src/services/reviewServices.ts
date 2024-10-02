import { Review, ReviewImage } from '../../type';
import { supabase } from '../constants/api';

export const getReviews = async (): Promise<Review[]> => {
  const { data, error } = await supabase.from('reviews').select('*');

  if (error) {
    throw new Error(error.message);
  }

  return data as Review[];
};

export const getReviewImages = async (): Promise<ReviewImage[]> => {
  const { data, error } = await supabase.from('reviewImages').select('*');

  if (error) {
    throw new Error(error.message);
  }
  return data as ReviewImage[];
};

export const getUserProductReviews = async (
  userId: number,
  productId: number
): Promise<Review[]> => {
  const { data, error } = await supabase
    .from('reviews')
    .select()
    .match({ userId, productId });

  if (error) {
    throw new Error(error.message);
  }

  return data as Review[];
};

export const deleteReview = async (id: number): Promise<void> => {
  const { error } = await supabase.from('reviews').delete().eq('id', id);

  if (error) {
    throw new Error(error.message);
  }
};

export const createReview = async (
  review: Omit<Review, 'id'>
): Promise<Review> => {
  const { data, error } = await supabase
    .from('reviews')
    .insert(review)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data as Review;
};
