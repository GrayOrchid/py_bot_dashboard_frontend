import { LangSwitcher } from '@/features'
import './authPage.scss'
import { AuthForm } from "@/widgets"

const AuthPage = ()=>{
    return(
        <div className="auth-page">
            <LangSwitcher/>
            <AuthForm/>
        </div>
    )
}

export default AuthPage