import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { SessionState } from './types';

export const useSessionStore = create<SessionState>()(
    persist(
        (_set) => ({
            step: 'email',
            token: null,
            email: null,
            isAuth: false,
            isLoading: false,
            user: null,
        }),
        { name: 'session-storage' }
    )
);

export const setSession = (data: Partial<SessionState>) => 
    useSessionStore.setState((state) => ({ ...state, ...data }));