import { useTranslation } from "react-i18next";
import { BrandBtn } from "@/shared/ui";
import type { SocialAuthProps } from "../model/types";
import { useSocialAuth } from "../hooks/useSocialAuth";

const DiscordAuth = ({ mode = 'login', onSuccess }: SocialAuthProps) => {
    const { t } = useTranslation();
    const { login, isLoading } = useSocialAuth({ 
        provider: 'discord', 
        mode, 
        onSuccess 
    });

    return (
        <BrandBtn
            brand="discord"
            icon="🎮"
            fullWidth
            onClick={login}
            disabled={isLoading}
        >
            {isLoading 
                ? t('auth.loading') 
                : mode === 'login' 
                    ? t('auth.loginwithDiscord') 
                    : t('auth.connectDiscord')
            }
        </BrandBtn>
    );
};

export default DiscordAuth;