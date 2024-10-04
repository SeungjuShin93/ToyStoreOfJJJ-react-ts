import { create } from 'zustand';
import { User } from '../../type';
import { persist } from 'zustand/middleware';

interface UserStoreState {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const UserStore = create(
  persist<UserStoreState>(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: 'UserStore',
    }
  )
);
