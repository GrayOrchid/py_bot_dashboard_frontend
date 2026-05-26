import { useTranslation } from 'react-i18next';
import { Logo } from '@/shared/ui';

const DashboardWelcome = () => {
    const { t } = useTranslation();

    return (
        <section className="dashboard-hero">
            <div className="dashboard-hero__brand">
                <Logo size={48} className="dashboard-hero__logo" />

                <div className="dashboard-hero__info">
                    <h1 className="dashboard-hero__title">
                        {t('dashboard.welcome.title', 'Добро пожаловать.')}
                    </h1>
                    <p className="dashboard-hero__subtitle">
                        {t('dashboard.welcome.subtitle', 'Ваша персональная панель управления сервисами и интеграциями.')}
                    </p>
                </div>
            </div>
        </section>
    );
};
export default DashboardWelcome