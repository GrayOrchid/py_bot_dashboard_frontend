export type SocialProvider = 'discord' | 'telegram';
export type AuthMode = 'login' | 'connect';

export interface SocialAuthProps {
    mode?: AuthMode; 
    onSuccess?: (token: string) => void; 
}

export interface SocialAuthOptions {
    provider: SocialProvider;
    mode?: AuthMode;
    onSuccess?: (token: string) => void;
}