import { useTranslation } from 'react-i18next';
import { Sun, Moon } from 'lucide-react';
import { useThemeStore } from '../store/useThemeStore';
import { Select } from '@/shared/ui';

const ThemeSwitcher = () => {
    const { t } = useTranslation();
    const { theme, setTheme } = useThemeStore();

    const options = [
        { value: 'light', label: t('theme.lightTheme'), icon: <Sun size={18} /> },
        { value: 'dark', label: t('theme.darkTheme'), icon: <Moon size={18} /> },
    ];

    return (
        <Select
            value={theme} 
            onChange={(val) => setTheme(val as 'light' | 'dark')} 
            options={options}
            placeholder={t('theme.placeholder')}
        />
    );
};

export default ThemeSwitcher