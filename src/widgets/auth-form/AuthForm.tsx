import { useTranslation } from 'react-i18next';
import './authForm.scss'
import { Surface } from '@/shared/ui';

const AuthForm = () => {
    const { t } = useTranslation();
    
    return (
        <Surface variant="raised" className="auth-form-wrapper">
            <div className="auth-form">
                <h1>{t('auth.title')}</h1>
            </div>
        </Surface>
    )
}

export default AuthForm;