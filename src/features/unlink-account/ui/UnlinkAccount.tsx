import './unlinkAccount.scss';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { sessionActions, useSessionLoading } from '@/entities/session';
import { Button, Modal } from "@/shared/ui";
import type { UnlinkAccountProps } from '../model/types';

const UnlinkAccount = ({ provider }: UnlinkAccountProps) => {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const isLoading = useSessionLoading();

    const toggleModal = () => !isLoading && setIsModalOpen(!isModalOpen);

    const handleUnlink = async () => {
        try {
            await sessionActions.unlinkAccount(provider);
            setIsModalOpen(false);
        } catch (e) {
            console.error(e);
        }
    };
    return (
        <>
            <Button
                variant="secondary"
                onClick={toggleModal}
                className="unlink-trigger-btn"
            >
                {t('shared.remove')}
            </Button>
            <Modal
                isOpen={isModalOpen}
                onClose={toggleModal}
                lazy
            >
                <div className="unlink-card">
                    <div className="unlink-card__header">
                        <div className="unlink-card__icon-wrapper">
                            <span className="unlink-card__icon">⚠️</span>
                        </div>
                        <h3 className="unlink-card__title">
                            {t('connector.confirmTitle')}
                        </h3>
                    </div>
                    <div className="unlink-card__body">
                        <p className="unlink-card__description">
                            {t('connector.confirmDescription', { provider: provider.charAt(0).toUpperCase() + provider.slice(1) })}
                        </p>
                    </div>
                    <div className="unlink-card__footer">
                        <Button
                            variant="secondary"
                            onClick={toggleModal}
                            disabled={isLoading}
                            className="unlink-card__btn"
                        >
                            {t('shared.cancel')}
                        </Button>
                        <Button
                            onClick={handleUnlink}
                            disabled={isLoading}
                            className="unlink-card__btn unlink-card__btn--confirm"
                        >
                            {isLoading ? t('shared.loading') : t('shared.confirmRemove')}
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default UnlinkAccount;