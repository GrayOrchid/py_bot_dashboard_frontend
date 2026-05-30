import { MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "@tanstack/react-query"; 
import { BrandBtn } from "@/shared/ui";
import { USER_QUERY_KEY } from "@/entities/user"; 
import { useDiscordAuth } from "../lib/useDiscordAuth";

const AuthByDiscord = () => {
    const { t } = useTranslation();
    const queryClient = useQueryClient();

    const { login, isLoading } = useDiscordAuth({
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: USER_QUERY_KEY });
        }
    });

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

export default AuthByDiscord;