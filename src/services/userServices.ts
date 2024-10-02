import { User } from '../../type';
import { supabase } from '../constants/api';

export const getUsers = async (): Promise<User[]> => {
  const { data, error } = await supabase.from('users').select('*');

  if (error) {
    throw new Error(error.message);
  }

  return data as User[];
};

export const getUserById = async (id: number): Promise<User> => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data as User;
};

export const deleteUser = async (id: number): Promise<void> => {
  const { error } = await supabase.from('users').delete().eq('id', id);

  if (error) {
    throw new Error(error.message);
  }
};

export const createUser = async (user: Omit<User, 'id'>): Promise<User> => {
  const { data, error } = await supabase.from('users').insert(user).single();

  if (error) {
    throw new Error(error.message);
  }

  return data as User;
};

export const updateUser = async (
  id: number,
  user: Partial<User>
): Promise<User> => {
  const { data, error } = await supabase
    .from('users')
    .update(user)
    .eq('id', id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data as User;
};
