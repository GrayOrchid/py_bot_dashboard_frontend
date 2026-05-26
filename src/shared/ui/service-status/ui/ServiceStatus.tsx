import './serviceStatus.scss';
import { useTranslation } from 'react-i18next';
import type { ServiceStatusProps } from '../model/types';

const ServiceStatus = ({
    label,
    isConnected,
    username,
    className = ''
}: ServiceStatusProps) => {
    const { t } = useTranslation();

    return (
        <div className={`service-status ${className}`}>
            <div className="service-status__header">
                <h3 className="service-status__label">{label}</h3>
                
                {isConnected && (
                    <p className="service-status__state service-status__state--connected">
                        {t('connector.status.connected')}
                    </p>
                )}
            </div>

            <div className="service-status__main">
                {isConnected ? (
                    <p className="service-status__username">
                        {username}
                    </p>
                ) : (
                    <p className="service-status__description">
                        {t('connector.status.disconnected')}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ServiceStatus