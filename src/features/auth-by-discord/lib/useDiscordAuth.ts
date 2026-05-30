import { useEffect, useState, useCallback, useRef } from "react";

interface UseDiscordAuthOptions {
    onSuccess?: () => void;
}

export const useDiscordAuth = (options?: UseDiscordAuthOptions) => {
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
        const handleMessage = (event: MessageEvent) => {
            const isAllowedOrigin =
                 event.origin === "http://127.0.0.1:8000" ||
                 event.origin === "http://localhost:8000";

            if (!isAllowedOrigin) return;

            if (event.data?.type === "AUTH_SUCCESS") {
                if (timerRef.current) {
                    clearInterval(timerRef.current);
                    timerRef.current = null;
                }

                setIsLoading(false);
                options?.onSuccess?.();
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
    }, [options]);

    return { login, isLoading, error };
};


