import './authPage.scss'
import { AppearanceSettings, AuthForm } from '@/widgets'

const AuthPage = ()=>{
    return(
        <div className="auth-page">
            <AppearanceSettings/>
            <AuthForm/>
        </div>
    )
}

export default AuthPage