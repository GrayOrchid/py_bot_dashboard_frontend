
export type AuthStep = 'email' | 'otp';

export interface SessionState {
    step: AuthStep;
    token: string | null;
    user: any | null; 
    email: string | null;
    isAuth: boolean;
    isLoading: boolean;
}

export interface LoginResponse {
    access_token: string;
    token_type: string;
    user: any; 
}