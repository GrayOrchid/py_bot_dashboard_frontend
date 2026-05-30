import { useMutation } from '@tanstack/react-query';
import { sendOtp, verifyOtp } from '../api/session.api';
import { sessionActions } from './session.selectors';

export const useSendOtpMutation = () => {
  return useMutation({
    mutationFn: async ({ email, lang }: { email: string; lang: string }) => {
      await sendOtp(email, lang);
      return email; 
    },
    onSuccess: (email) => {
      sessionActions.setEmail(email);
      sessionActions.setStep('otp');
    },
  });
};

export const useVerifyOtpMutation = () => {
  return useMutation({
    mutationFn: async ({ email, otp }: { email: string; otp: string }) => {
      const response = await verifyOtp(email, otp);
      return response.data; 
    },
    onSuccess: (data) => {
      sessionActions.login(data.access_token);
    },
  });
};