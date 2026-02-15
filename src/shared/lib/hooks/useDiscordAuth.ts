import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useDiscordAuth = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const login = useCallback(() => {
        setIsLoading(true);
        setError(null);
        const popup = window.open(
            "http://127.0.0.1:8000/api/auth/discord/login",
            "Discord Login",
            "width=500,height=750"
        );
        if (!popup) {
            setError("Попап заблокирован!");
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            const isAllowedOrigin =
                event.origin === "http://127.0.0.1:8000" ||
                event.origin === "http://localhost:8000";

            if (!isAllowedOrigin) return;

            if (event.data?.type === "AUTH_SUCCESS") {
                const token = event.data.payload?.token;
                if (token) {
                    localStorage.setItem('auth_token', token);
                    setIsLoading(false);
                    window.location.href = '/dashboard';
                }
            }

            if (event.data?.type === "AUTH_ERROR") {
                setError(event.data.payload?.message || "Ошибка авторизации");
                setIsLoading(false);
            }
        };

        window.addEventListener("message", handleMessage);
        return () => window.removeEventListener("message", handleMessage);
    }, [navigate]);

    return { login, isLoading, error };
};