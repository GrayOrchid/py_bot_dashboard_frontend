
export type AuthStep = 'email' | 'otp';

export interface User {
  id: number;
  email: string;
  email_verified: boolean;
  created_at: string; 
  linked_accounts: any[]; 
  balance?: number; 
}

export interface SessionState {
  step: AuthStep;
  token: string | null;
  user: User | null; 
  email: string | null;
  isAuth: boolean;
  isLoading: boolean;
}
export interface LoginResponse {
    access_token: string;
    token_type: string;
    user: any; 
}