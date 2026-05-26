type Theme = 'light' | 'dark';

export interface ThemeState {
    theme: Theme;
    setTheme: (theme: Theme) => void
}

export const options = [
        { value: 'light', label: 'theme.lightTheme' },
        { value: 'dark', label: 'theme.darkTheme' },
]; 