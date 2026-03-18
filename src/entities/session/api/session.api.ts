import { $api } from '@/shared/api';
import type { LoginResponse } from '../model/types';

export const sendOtp = (email: string, lang: string) => 
    $api.post('/auth/send-otp', { email,lang });

export const verifyOtp = (email: string, otp: string) => 
    $api.post<LoginResponse>('/auth/verify-otp', { email, otp });

export const getMe = () => 
    $api.get('/users/me');