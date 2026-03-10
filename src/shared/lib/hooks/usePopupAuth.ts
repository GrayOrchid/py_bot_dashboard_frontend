import { useCallback,  useState } from "react";

interface UsePopupAuthOptions {
    url: string;
    targetOrigin: string;
}

export const usePopupAuth = ({ url, targetOrigin }: UsePopupAuthOptions) => {
    const [isLoading, setIsLoading] = useState(false);

    const login = useCallback(() => {
        setIsLoading(true);
        const popup = window.open(url, "auth-popup", "width=500,height=750");

        if (!popup) {
            setIsLoading(false);
            return;
        }

        const timer = setInterval(() => {
            if (popup.closed) {
                clearInterval(timer);
                setIsLoading(false);
            }
        }, 1000);
    }, [url]);

    return { login, isLoading };
};