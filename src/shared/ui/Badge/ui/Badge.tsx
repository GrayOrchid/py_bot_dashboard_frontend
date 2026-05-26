import { useTranslation } from "react-i18next";
import clsx from 'clsx';
import './Badge.scss';

interface BadgeProps {
    active: boolean;
    className?: string;
}

const Badge = ({ active, className = '' }: BadgeProps) => {
    const { t } = useTranslation();

    return (
        <div className={clsx('status-badge', { 'is-active': active }, className)}>
            <span className="status-badge__dot" />
            <span className="status-badge__text">
                {active ? t('connector.statusConnected') : t('connector.statusDisconnected')}
            </span>
        </div>
    );
};

export default Badge;