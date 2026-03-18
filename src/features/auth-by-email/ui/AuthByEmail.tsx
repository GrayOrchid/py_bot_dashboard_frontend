import './AuthByEmail.scss';
import { useRef } from 'react';
import { sessionActions, useSessionLoading } from "@/entities/session";
import { useHotkeys, useInput } from "@/shared/lib/hooks";
import { Input, Button } from "@/shared/ui";
import { useTranslation } from 'react-i18next';

const AuthByEmail = () => {
    const { t } = useTranslation();

    const emailField = useInput('', { isEmpty: true, isEmail: true });
    const isLoading = useSessionLoading();
    const submitRef = useRef<HTMLButtonElement>(null);

    useHotkeys([
        { key: 'Enter', ref: submitRef },
    ], !isLoading);


    const handleSendCode = async () => {
        if (emailField.isValid) {
            await sessionActions.requestLoginCode(emailField.value);
        }
    };

    return (
        <div
            className="auth-by-email"
        >
            <Input
                label={t('input.EMail')}
                placeholder="example@mail.com"
                hookProps={emailField}
                disabled={isLoading}
                type="email"
            />
            <Button
                ref={submitRef}
                variant="primary"
                onClick={handleSendCode}
                isLoading={isLoading}
                disabled={!emailField.isValid}
                className="auth-by-email__button"
            >
                {t('form.getCode')}
            </Button>
        </div>
    );
};

export default AuthByEmail;