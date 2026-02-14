import './appearanceSettings.scss'
import { LangSwitcher, ThemeSwitcher } from '@/features';

export const AppearanceSettings = () => {
    return (
        <div className='appearance-settings'>
            <LangSwitcher />
            <ThemeSwitcher />
        </div>
    );
};

export default AppearanceSettings