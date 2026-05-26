import { useEffect, useState, useCallback, useRef } from "react";
import { sessionActions } from "@/entities/session"; 

export const useDiscordAuth = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const timerRef = useRef<number | null>(null);

    const login = useCallback(() => {
        setIsLoading(true);
        setError(null);

        const popup = window.open(
            "http://127.0.0.1:8000/api/auth/discord/login",
            "Discord Login",
            "width=500,height=750"
        );

        if (!popup) {
            setError("Попап заблокирован! Разрешите всплывающие окна.");
            setIsLoading(false);
            return;
        }

        timerRef.current = window.setInterval(() => {
            if (popup.closed) {
                setIsLoading(false);
                if (timerRef.current) {
                    clearInterval(timerRef.current);
                    timerRef.current = null;
                }
            }
        }, 500);
    }, []);

    useEffect(() => {
        const handleMessage = async (event: MessageEvent) => {
            const isAllowedOrigin =
                 event.origin === "http://127.0.0.1:8000" ||
                 event.origin === "http://localhost:8000";

            if (!isAllowedOrigin) return;

            if (event.data?.type === "AUTH_SUCCESS") {
                if (timerRef.current) {
                    clearInterval(timerRef.current);
                    timerRef.current = null;
                }

                try {
                    await sessionActions.refreshUser();
                } catch (e) {
                    setError("Ошибка обновления данных профиля");
                } finally {
                    setIsLoading(false);
                }
            }

            if (event.data?.type === "AUTH_ERROR") {
                setError(event.data.payload?.message || "Ошибка авторизации");
                setIsLoading(false);
                if (timerRef.current) {
                    clearInterval(timerRef.current);
                    timerRef.current = null;
                }
            }
        };

        window.addEventListener("message", handleMessage);
        return () => {
            window.removeEventListener("message", handleMessage);
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, []);

    return { login, isLoading, error };
};