import { BrandBtn } from "@/shared/ui";
import { MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useDiscordAuth } from "../lib/useDiscordAuth";

 const AuthByDiscord = () => {
    const { login, isLoading } = useDiscordAuth();
    const { t } = useTranslation();

    return (
        <BrandBtn
            brand="discord" 
            onClick={login} 
            disabled={isLoading}
            icon={<MessageCircle size={20} />}
        >
            {isLoading ? t('shared.loading') : t('connector.linkAccount')}
        </BrandBtn>
    );
};

export default AuthByDiscord