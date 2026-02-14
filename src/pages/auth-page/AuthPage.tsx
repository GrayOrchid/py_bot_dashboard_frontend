import './authPage.scss'
import { AuthForm } from "@/widgets"
import { LangSwitcher } from '@/features/lang-switcher/LangSwitcher'

const AuthPage = ()=>{
    return(
        <div className="auth-page">
            <LangSwitcher/>
            <AuthForm/>
        </div>
    )
}

export default AuthPage