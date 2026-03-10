import { useInput } from "@/shared/lib/hooks"; 
import { Input } from "@/shared/ui";

export const AuthFormActions = () => {
  const emailField = useInput('', { isEmpty: true, isEmail: true });

  return (
    <div className="auth-actions">
      <Input
        label="Электронная почта"
        placeholder="example@mail.com"
        hookProps={emailField} 
        type="email"
      />
      
    </div>
  );
};

export default AuthFormActions;