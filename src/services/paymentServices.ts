import { Payment } from '../../type';
import { supabase } from '../constants/api';

export const getPayments = async (): Promise<Payment[]> => {
  const { data, error } = await supabase.from('payments').select('*');

  if (error) {
    throw new Error(error.message);
  }

  return data as Payment[];
};

export const getPaymentsByUserId = async (
  userId: number
): Promise<Payment[]> => {
  const { data, error } = await supabase
    .from('payments')
    .select('*')
    .eq('userId', userId);

  if (error) {
    throw new Error(error.message);
  }

  return data as Payment[];
};

export const deletePayment = async (paymentId: number): Promise<void> => {
  const { error } = await supabase
    .from('payments')
    .delete()
    .eq('id', paymentId);

  if (error) {
    throw new Error(error.message);
  }
};

export const createPayment = async (
  payment: Omit<Payment, 'id'>
): Promise<Payment> => {
  const { data, error } = await supabase
    .from('payments')
    .insert(payment)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data as Payment;
};
