import { useThemeStore } from '../store/useThemeStore';
import { Select } from '@/shared/ui';
import { memo, useCallback } from 'react';
import { options } from '../model/types';



const ThemeSwitcher = () => {
    const theme = useThemeStore((state) => state.theme);
    const setTheme = useThemeStore((state) => state.setTheme);

    const handleChange = useCallback((val: string) => {
        setTheme(val as 'light' | 'dark');
    }, [setTheme]);

    return (
        <Select
            value={theme} 
            onChange={handleChange} 
            options={options}
            placeholder={'theme.placeholder'}
        />
    );
};

export default memo(ThemeSwitcher);