export type AuthStep = 'email' | 'otp';

export interface SessionState {
  step: AuthStep;
  token: string | null;
  email: string | null;
  isAuth: boolean;
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
}

export interface SessionActions {
  setStep: (step: AuthStep) => void;
  setEmail: (email: string | null) => void;
  login: (token: string) => void;
  logout: () => void;
}
