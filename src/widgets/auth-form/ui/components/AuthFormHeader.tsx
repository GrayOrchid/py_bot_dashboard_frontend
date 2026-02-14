import { useTranslation } from "react-i18next";

const AuthFormHeader = () => {
    const { t } = useTranslation();

    return (
        <header className="auth-form__header">
            <h1 className="auth-form__title">{t('auth.authFormTitle')}</h1>
            <p className="auth-form__description">{t('auth.authFormDescription')}</p>
        </header>
    )
}

export default AuthFormHeader