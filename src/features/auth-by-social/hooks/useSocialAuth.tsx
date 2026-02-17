import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage, usePopupAuth } from "@/shared/lib/hooks";
import type { SocialAuthOptions } from "../model/types";
import { URLS } from "@/shared/config";

export const useSocialAuth = ({ provider, mode = 'login', onSuccess }: SocialAuthOptions) => {
    const navigate = useNavigate();
    const [token, setToken] = useLocalStorage('auth_token', null);

    const providerKey = provider.toUpperCase() as keyof typeof URLS.AUTH;
    const baseUrlObject = URLS.AUTH[providerKey];
    const authUrl = mode === 'login' ? baseUrlObject.LOGIN : baseUrlObject.LINK;

    const finalUrl = useMemo(() => {
        return mode === 'connect' && token
            ? `${authUrl}?user_token=${token}`
            : authUrl;
    }, [authUrl, mode, token]);

    const { login, isLoading } = usePopupAuth({
        url: finalUrl,
        targetOrigin: URLS.BASE
    });

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            const cleanOrigin = event.origin.replace(/\/$/, "");
            const cleanTarget = URLS.BASE.replace(/\/$/, "");


            if (cleanOrigin !== cleanTarget) {
                console.warn("Origin mismatch!");
                return;
            }

            if (event.data?.type === "AUTH_SUCCESS") {
                const appToken = event.data.payload?.token;


                if (appToken) {
                    if (mode === 'connect') {
                        onSuccess?.(appToken);
                    } else {
                        setToken(appToken);
                        navigate('/dashboard');
                    }
                }
            }
        };

        window.addEventListener("message", handleMessage);
        return () => window.removeEventListener("message", handleMessage);
    }, [navigate, mode, onSuccess, setToken]);

    return { login, isLoading };
};