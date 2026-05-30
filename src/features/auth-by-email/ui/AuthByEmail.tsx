import './AuthByEmail.scss';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useSendOtpMutation } from "@/entities/session"; 
import { useHotkeys, useInput } from "@/shared/lib/hooks";
import { Input, Button } from "@/shared/ui";

const AuthByEmail = () => {
    const { t, i18n } = useTranslation();
    const emailField = useInput('', { isEmpty: true, isEmail: true });
    const submitRef = useRef<HTMLButtonElement>(null);

    const { mutate: sendOtp, isPending } = useSendOtpMutation();

    useHotkeys([
        { key: 'Enter', ref: submitRef },
    ], !isPending);

    const handleSendCode = () => {
        if (emailField.isValid && !isPending) {
            sendOtp({ 
                email: emailField.value, 
                lang: i18n.language || 'en' 
            });
        }
    };

    return (
        <div className="auth-by-email">
            <Input
                label={t('input.EMail')}
                placeholder="example@mail.com"
                hookProps={emailField}
                disabled={isPending}
                type="email"
            />
            <Button
                ref={submitRef}
                variant="primary"
                onClick={handleSendCode}
                isLoading={isPending} 
                disabled={!emailField.isValid || isPending}
                className="auth-by-email__button"
            >
                {t('form.getCode')}
            </Button>
        </div>
    );
};

export default AuthByEmail;