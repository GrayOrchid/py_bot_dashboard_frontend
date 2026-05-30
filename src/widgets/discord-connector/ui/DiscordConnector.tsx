import './DiscordConnector.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { useFindObject } from "@/shared/lib/hooks";
import { useIsAuth } from '@/entities/session';
import { useCurrentUser } from '@/entities/user';
import { 
    Surface, 
    Button, 
    UserAvatar, 
    Badge, 
    ConnectorHeader, 
    ConnectorStatusGroup, 
    ConnectorLabel, 
    ConnectorName, 
    ConnectorActions, 
    ConnectorConnectedActions 
} from "@/shared/ui";
import { AuthByDiscord, UnlinkAccount } from '@/features';

const DiscordConnector = () => {
    const { t } = useTranslation();
    
    const isAuth = useIsAuth();
    const { data: user, isLoading } = useCurrentUser(isAuth);

    const data = useFindObject(user?.linked_accounts, 'discord', 'provider');
    const isConnected = !!data;
    
    if (isLoading) {
        return (
            <Surface className="discord-connector" style={{ minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span>{t('common.loading') || 'Loading...'}</span>
            </Surface>
        );
    }
    
    return (
        <Surface className="discord-connector">
            <ConnectorHeader>
                <UserAvatar src={data?.avatar_url} size={54} hasBorder={isConnected} variant="squircle" />
                <ConnectorStatusGroup>
                    <ConnectorLabel text='Discord' />
                    <Badge active={isConnected} />
                    <ConnectorName text={isConnected ? data.display_name : ""} />
                </ConnectorStatusGroup>
            </ConnectorHeader>
            <ConnectorActions>
                {isConnected ? (
                    <ConnectorConnectedActions>
                        <Button as={Link} to="/discord" variant="secondary">
                            {t('connector.go')} →
                        </Button>
                        <UnlinkAccount provider={'discord'}/>
                    </ConnectorConnectedActions>
                ) : (
                    <AuthByDiscord />
                )}
            </ConnectorActions>
        </Surface>
    );
};

export default DiscordConnector;