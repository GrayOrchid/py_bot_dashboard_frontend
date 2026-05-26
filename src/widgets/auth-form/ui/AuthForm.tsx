import './authForm.scss';
import { Surface } from '@/shared/ui';
import { AuthFormActions, AuthFormHeader, AuthFormMail } from './components';

const AuthForm = () => {

    return (
        <Surface variant="raised" className="auth-card">
            <div className="auth-form">
                <AuthFormHeader/>
                <AuthFormMail/>
                <AuthFormActions/>
            </div>
        </Surface>
    );
};

export default AuthForm;
