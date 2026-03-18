import { useSessionStore } from "@/entities/session";
import { useTranslation } from "react-i18next";

const AuthFormMail = () => {
    const { t } = useTranslation();
    const email = useSessionStore(state => state.email);

    return (
        <>
            {
                email && (
                    <div className="auth-form__accept">
                        <p className="auth-form__accept-text">{t('form.sendedCode')} </p>
                        <b className="auth-form__accept-email">{email}</b>
                    </div>
                )
            }</>
    )
}

export default AuthFormMail