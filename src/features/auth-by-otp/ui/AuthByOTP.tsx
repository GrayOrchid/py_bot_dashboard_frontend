import './AuthByOtp.scss';
import { useRef } from 'react';
import { sessionActions, useSessionLoading } from "@/entities/session";
import { useHotkeys, useInput } from "@/shared/lib/hooks";
import { Input, Button } from "@/shared/ui";
import { useTranslation } from 'react-i18next';

const AuthByOtp = () => {
    const { t } = useTranslation();

    const otpField = useInput('', { isEmpty: true, minLength: 6, onlyNumbers: true });
    const isLoading = useSessionLoading();

    const submitRef = useRef<HTMLButtonElement>(null);
    const backRef = useRef<HTMLButtonElement>(null);

    const handleLogin = async () => {
        await sessionActions.login(otpField.value);
    };

    const handleBack = () => {
        sessionActions.clearEmail();
    };

    useHotkeys([
        { key: 'Enter', ref: submitRef },
        { key: 'Escape', ref: backRef }
    ], !isLoading);

    return (
        <div
            className="auth-by-otp"
            tabIndex={-1}
        >
            <Input
                label={t('input.OTPCode')}
                placeholder="0000"
                hookProps={otpField}
                disabled={isLoading}
                type='number'
            />
            <div className="auth-by-otp__actions">
                <Button
                    ref={submitRef}
                    variant="primary"
                    onClick={handleLogin}
                    isLoading={isLoading}
                    disabled={!otpField.isValid}
                >
                    {t('form.logIn')}
                </Button>
                <Button
                    ref={backRef}
                    variant="link"
                    onClick={handleBack}
                    disabled={isLoading}
                >
                    {t('form.changeEmail')} (Esc)
                </Button>
            </div>
        </div>
    );
};

export default AuthByOtp;