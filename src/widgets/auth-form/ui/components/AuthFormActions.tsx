import { useSessionStore } from "@/entities/session";
import AuthByOtp from "@/features/auth-by-otp/ui/AuthByOTP";
import AuthByEmail from "@/features/auth-by-email/ui/AuthByEmail"; 

export const AuthFormActions = () => {
  const step = useSessionStore((state) => state.step);

  return (
    <div className="auth-form__actions">
      {step === 'email' && <AuthByEmail />}
      {step === 'otp' && <AuthByOtp />}
    </div>
  );
};

export default AuthFormActions;