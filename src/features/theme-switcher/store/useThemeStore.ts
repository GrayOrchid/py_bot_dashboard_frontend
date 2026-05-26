import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ThemeState } from '../model/types';

export const useThemeStore = create<ThemeState>()(
    persist(
        (set) => ({
            theme: 'light',
            setTheme: (theme) => {
                set({ theme });
                document.documentElement.dataset.theme = theme;
            },
        }),
        {
            name: 'theme-storage',
            onRehydrateStorage: () => (state) => {
                if (state) {
                    document.documentElement.dataset.theme = state.theme;
                }
            },
        }
    )
);


