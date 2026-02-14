import './authForm.scss';
import { Surface } from '@/shared/ui';
import { AuthFormActions, AuthFormHeader } from './components';

const AuthForm = () => {

    return (
        <Surface variant="raised" className="auth-card">
            <div className="auth-form">
                <AuthFormHeader/>
                <AuthFormActions/>
            </div>
        </Surface>
    );
};

export default AuthForm;