import './unlinkAccount.scss';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { Button, Modal } from "@/shared/ui";
import { useUnlinkAccount } from '@/entities/user'; 
import type { UnlinkAccountProps } from '../model/types';

const UnlinkAccount = ({ provider }: UnlinkAccountProps) => {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const { mutate: unlinkAccount, isPending } = useUnlinkAccount();

    const toggleModal = () => !isPending && setIsModalOpen(!isModalOpen);

    const handleUnlink = () => {
        unlinkAccount(provider, {
            onSuccess: () => {
                setIsModalOpen(false);
            }
        });
    };

    return (
        <>
            <Button
                variant="secondary"
                onClick={toggleModal}
                className="unlink-trigger-btn"
                disabled={isPending}
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
                            {t('connector.confirmDescription', { 
                                provider: provider.charAt(0).toUpperCase() + provider.slice(1) 
                            })}
                        </p>
                    </div>
                    <div className="unlink-card__footer">
                        <Button
                            variant="secondary"
                            onClick={toggleModal}
                            disabled={isPending}
                            className="unlink-card__btn"
                        >
                            {t('shared.cancel')}
                        </Button>
                        <Button
                            onClick={handleUnlink}
                            disabled={isPending}
                            isLoading={isPending} 
                            className="unlink-card__btn unlink-card__btn--confirm"
                        >
                            {isPending ? t('shared.loading') : t('shared.confirmRemove')}
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default UnlinkAccount;