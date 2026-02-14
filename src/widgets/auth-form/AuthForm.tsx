import { useTranslation } from 'react-i18next';
import './authForm.scss'

const AuthForm = ()=>{
    const { t } = useTranslation();
    return(
        <div className="auth-form">
          <h1>{t('auth.title')}</h1>
        </div>
    )
}

export default AuthForm