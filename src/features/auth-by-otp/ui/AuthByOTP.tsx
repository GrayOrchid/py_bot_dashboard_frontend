import './AuthByOtp.scss';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useVerifyOtpMutation, useAuthEmail, sessionActions } from "@/entities/session";
import { useHotkeys, useInput } from "@/shared/lib/hooks";
import { Input, Button } from "@/shared/ui";

const AuthByOtp = () => {
    const { t } = useTranslation();

    const email = useAuthEmail();

    const { mutate: verifyOtp, isPending } = useVerifyOtpMutation();

    const otpField = useInput('', { isEmpty: true, minLength: 6, onlyNumbers: true });

    const submitRef = useRef<HTMLButtonElement>(null);
    const backRef = useRef<HTMLButtonElement>(null);

    const handleLogin = () => {
        if (otpField.isValid && email && !isPending) {
            verifyOtp({ 
                email, 
                otp: otpField.value 
            });
        }
    };

    const handleBack = () => {
        if (!isPending) {
            sessionActions.setStep('email');
        }
    };

    useHotkeys([
        { key: 'Enter', ref: submitRef },
        { key: 'Escape', ref: backRef }
    ], !isPending);

    return (
        <div className="auth-by-otp" tabIndex={-1}>
            <Input
                label={t('input.OTPCode')}
                placeholder="000000" 
                hookProps={otpField}
                disabled={isPending}
                type='number'
            />
            <div className="auth-by-otp__actions">
                <Button
                    ref={submitRef}
                    variant="primary"
                    onClick={handleLogin}
                    isLoading={isPending}
                    disabled={!otpField.isValid || isPending}
                >
                    {t('form.logIn')}
                </Button>
                <Button
                    ref={backRef}
                    variant="link"
                    onClick={handleBack}
                    disabled={isPending}
                >
                    {t('form.changeEmail')} (Esc)
                </Button>
            </div>
        </div>
    );
};

export default AuthByOtp;