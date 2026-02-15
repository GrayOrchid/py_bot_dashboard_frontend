import './authPage.scss'
import { AppearanceSettings, AuthForm } from '@/widgets'

export const AuthPage = ()=>{
    return(
        <div className="auth-page">
            <AppearanceSettings/>
            <AuthForm/>
        </div>
    )
}

