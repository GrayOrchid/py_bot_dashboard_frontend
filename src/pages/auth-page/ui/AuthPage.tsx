import { LangSwitcher, ThemeSwitcher } from '@/features'
import { AuthForm } from '@/widgets'
import './authPage.scss'

export const AuthPage = () => {
    return (
        <div className="auth-page">
            <div className='auth-page__settings'>
                <LangSwitcher />
                <ThemeSwitcher />
            </div>
            <AuthForm />
        </div>
    )
}

