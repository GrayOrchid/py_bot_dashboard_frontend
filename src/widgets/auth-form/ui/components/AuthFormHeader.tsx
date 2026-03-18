import { useSessionStore } from "@/entities/session";
import { useTranslation } from "react-i18next";

const AuthFormHeader = () => {
    const { t } = useTranslation();
    const email = useSessionStore(state => state.email);

    return (
        <header className="auth-form__header">
            <h1 className="auth-form__title">{t('auth.authFormTitle')}</h1>
            {
                !email && (
                    <p className="auth-form__description">{t('auth.loginWithMail')}</p>
                )}
        </header>
    )
}

export default AuthFormHeader