import * as api from '../api/session.api';
import { setSession, useSessionStore } from './session.store';
import type { AuthStep, User } from './types';

export const sessionActions = {
    requestLoginCode: async (email: string) => {
        setSession({ isLoading: true });
        const lang = localStorage.getItem('i18nextLng') || 'ru';

        try {
            await api.sendOtp(email, lang);
            setSession({ email, step: 'otp' });
        } catch (error) {
            console.error("Ошибка отправки OTP", error);
            throw error;
        } finally {
            setSession({ isLoading: false });
        }
    },

    setStep: (step: AuthStep) => setSession({ step }),

    clearEmail: () => {
        setSession({ email: null, step: 'email' });
    },

    refreshUser: async () => {
        try {
            const { data } = await api.getMe<User>();
            setSession({ user: data });
        } catch (error: any) {
            if (error.response?.status === 401) {
                sessionActions.logout();
            }
        }
    },

    login: async (otp: string) => {
        const { email } = useSessionStore.getState();
        if (!email) throw new Error('Email is missing');

        setSession({ isLoading: true });
        try {
            const { data } = await api.verifyOtp(email, otp);
            setSession({
                token: data.access_token,
                user: data.user,
                isAuth: true,
                step: 'email',
            });

        } catch (error) {
            console.error("Login failed", error);
            throw error;
        } finally {
            setSession({ isLoading: false });
        }
    },

    logout: () => {
        setSession({
            token: null,
            user: null,
            isAuth: false,
            email: null,
            step: 'email'
        });
        useSessionStore.persist.clearStorage();
    },

    unlinkAccount: async (provider: string) => {
        setSession({ isLoading: true });
        console.log(provider);
        
        try {
            const { data } = await api.unlinkProvider(provider);
            if (data && typeof data === 'object') {
                setSession({ user: data });
            } else {
                await sessionActions.refreshUser();
            }
        } catch (error) {
            console.error(`[SessionActions] Failed to unlink ${provider}`, error);
            throw error;
        } finally {
            setSession({ isLoading: false });
        }
    },
};