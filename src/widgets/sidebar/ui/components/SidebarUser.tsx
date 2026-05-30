import { useIsAuth } from '@/entities/session';
import { useCurrentUser } from '@/entities/user';
import { Divider, Surface } from '@/shared/ui';
import { Wallet } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SidebarUser = () => {
  const isAuth = useIsAuth();
  const { data: user, isLoading } = useCurrentUser(isAuth);

  if (isLoading) return <div>Загрузка...</div>;
  if (!user) return null; 
  const { t } = useTranslation();

  return (
    <>
      <Divider
        align="center"
      >
        {t('sidebar.user')}
      </Divider>
      <Surface variant="raised" className="sidebar__user-card">
        <div className="sidebar__user-info">
          <span className="sidebar__user-email">{user.email}</span>
          <div className="sidebar__user-balance">
            <Wallet size={14} />
            <span>{user.balance || 0} ₽</span>
          </div>
        </div>
      </Surface>
    </>
  );
};

export default SidebarUser;