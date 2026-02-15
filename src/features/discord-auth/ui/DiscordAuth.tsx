import { useDiscordAuth } from "@/shared/lib/hooks";
import { BrandBtn } from "@/shared/ui"
import { useTranslation } from "react-i18next";

const DiscordAuth = () => {
    const { login } = useDiscordAuth();
    const { t } = useTranslation();

    return (
        <BrandBtn
            brand="discord"
            icon="🎮"
            fullWidth
            onClick={login}
        >
            {t('auth.loginwithDiscord')}
        </BrandBtn>

    )
}

export default DiscordAuth