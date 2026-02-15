import { useEffect, useState } from 'react';
import axios from 'axios';
import './dashboardPage.scss';

// Типизация для юзера (подправь под свои поля из FastAPI)
interface UserData {
    username: string;
    avatar?: string;
    id: string;
}

export const DashboardPage = () => {
    const [user, setUser] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMe = async () => {
            try {
                // Берем токен из localStorage
                const token = localStorage.getItem('auth_token');

                if (!token) {
                    setError('Токен не найден');
                    setLoading(false);
                    return;
                }

                const response = await axios.get('http://127.0.0.1:8000/api/users/me', {
                    headers: {
                        // Стандарт OAuth2: Bearer <token>
                        Authorization: `Bearer ${token}`
                    }
                });

                setUser(response.data);
            } catch (err: any) {
                console.error('Ошибка при получении данных пользователя:', err);
                setError(err.response?.data?.detail || 'Не удалось загрузить данные');
                
                // Если токен просрочен (401), можно выкинуть на логин
                if (err.response?.status === 401) {
                    localStorage.removeItem('auth_token');
                    window.location.href = '/';
                }
            } finally {
                setLoading(false);
            }
        };

        fetchMe();
    }, []);

    if (loading) return <div className="loader">Загрузка профиля...</div>;
    if (error) return <div className="error-msg">{error}</div>;

    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            {user && (
                <div className="user-card">
                    <h2>Привет, {user.username}!</h2>
                    <p>Твой ID: {user.id}</p>
                    {/* Если есть аватарка от Дискорда */}
                    {user.avatar && <img src={user.avatar} alt="avatar" />}
                </div>
            )}
        </div>
    );
};

