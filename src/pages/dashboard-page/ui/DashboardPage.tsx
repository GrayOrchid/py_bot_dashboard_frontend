import { useTranslation } from 'react-i18next';
import { DiscordConnector} from '@/widgets';
import './dashboardPage.scss';
import { DashboardWelcome } from './components';
import { Divider } from '@/shared/ui';

export const DashboardPage = () => {
  const { t } = useTranslation();
  return (
    <div className="dashboard-layout">
      <main className="dashboard-main">
        <div className="dashboard-main__container">
          <DashboardWelcome />
          <section className="dashboard-content">
            <Divider
              align="center"
              weight='2px'
              fontSize='20px'
            >
              {t('home.services')}
            </Divider>
            <div className="dashboard-grid">
              <DiscordConnector />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
