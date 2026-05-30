
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { SessionState, SessionActions } from './types';

export const useSessionStore = create<SessionState & { actions: SessionActions }>()(
  persist(
    (set) => ({
      step: 'email',
      token: null,
      email: null,
      isAuth: false,
      actions: {
        setStep: (step) => set({ step }),
        setEmail: (email) => set({ email }),
        login: (token) => set({ token, isAuth: true, step: 'email', email: null }),
        logout: () => {
          set({ token: null, isAuth: false, email: null, step: 'email' });
          useSessionStore.persist.clearStorage();
        },
      },
    }),
    { 
      name: 'session-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ token: state.token, isAuth: state.isAuth })
    }
  )
);