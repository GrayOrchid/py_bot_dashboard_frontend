import { useEffect } from 'react';
import { useUser, sessionActions, useIsAuth } from '@/entities/session';

export const DashboardPage = () => {
  const user = useUser(); 
  const isAuth = useIsAuth();

  useEffect(() => {
    if (isAuth) {
      sessionActions.refreshUser();
    }
  }, [isAuth]);

  if (!user) return <div>Загрузка профиля...</div>;

  return (
    <div className="dashboard">
      <h1>Панель управления</h1>
      <div className="profile-info">
        <p>Email: {user.email}</p>
        <p>ID: {user.id}</p>
      </div>
      <button onClick={sessionActions.logout}>Выйти</button>
    </div>
  );
};