import { useTranslation } from 'react-i18next';
import { ListItem, Divider } from '@/shared/ui'; 
import { MessageCircle, Send, ChevronRight } from 'lucide-react';
import { useUser } from '@/entities/session';
import type { JSX } from 'react';

const SERVICE_CONFIG: Record<string, { icon: JSX.Element, path: string }> = {
    discord: { 
        icon: <MessageCircle size={18} />, 
        path: '/discord' 
    },
    telegram: { 
        icon: <Send size={18} />, 
        path: '/telegram' 
    }
};

const SidebarServices = () => {
    const { t } = useTranslation();
    const user = useUser();

    const services = user?.linked_accounts || [];

    return (
        <div className="sidebar-services">
            <Divider align="center">
                {t('sidebar.services')}
            </Divider>

            <ul className="sidebar-services__list">
                {services.map((account) => {
                    const config = SERVICE_CONFIG[account.provider];

                    if (!config) return null;

                    return (
                        <ListItem
                            key={account.id}
                            as="li"
                            to={`/discord`}
                            label={account.display_name || account.provider}
                            icon={config.icon}
                            action={<ChevronRight size={14} className="text-secondary opacity-50" />}
                        />
                    );
                })}

                {services.length === 0 && (
                   <ListItem 
                        as="li"
                        label={t('connector.statusDisconnected')} 
                        to="/dashboard"
                        className="opacity-50"
                   />
                )}
            </ul>
        </div>
    );
};

export default SidebarServices;