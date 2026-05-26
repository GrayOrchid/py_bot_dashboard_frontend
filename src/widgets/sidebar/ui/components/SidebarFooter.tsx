import { useTranslation } from 'react-i18next';
import { sessionActions } from '@/entities/session';
import { LangSwitcher, ThemeSwitcher } from '@/features';
import { LogOut } from 'lucide-react';
import { Divider } from '@/shared/ui';

export const SidebarFooter = () => {
    const { t } = useTranslation();

    return (
        <div className="sidebar__footer">
            <Divider/>
            <div className='sidebar__footer-settings'>
                <LangSwitcher />
                <ThemeSwitcher />
            </div>
            <button 
                className="sidebar__footer-logout-btn" 
                onClick={sessionActions.logout}
            >
                <LogOut size={18} />
                <span>{t('auth.logout')}</span>
            </button>
        </div>
    );
};

export default SidebarFooter;