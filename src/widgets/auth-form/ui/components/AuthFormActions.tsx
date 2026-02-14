import { BrandBtn } from "@/shared/ui";
import { useTranslation } from "react-i18next";

export const AuthFormActions= () => {
    const { t } = useTranslation();
    
    const handleDiscordLogin = () => {
        console.log('pending...');
    };

    return (
        <div className="auth-actions">
            <BrandBtn
                brand="discord" 
                icon="🎮" 
                fullWidth
                onClick={handleDiscordLogin} 
            >
                {t('auth.loginwithDiscord')}
            </BrandBtn>
        </div>
    );
};

export default AuthFormActions


