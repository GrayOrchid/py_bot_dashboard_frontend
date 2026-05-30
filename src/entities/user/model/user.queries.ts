
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { $api } from '@/shared/api';
import type { User } from './types';

export const USER_QUERY_KEY = ['user', 'me'] as const;

export const useCurrentUser = (isAuth: boolean) => {
  return useQuery({
    queryKey: USER_QUERY_KEY,
    queryFn: async () => {
      const response = await $api.get<User>('/users/me');
      return response.data;
    },
    enabled: isAuth, 
    staleTime: 5 * 60 * 1000, 
    retry: false, 
  });
};


export const useUnlinkAccount = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (provider: string) => {
      const response = await $api.delete<User>(`/users/me/accounts/${provider}`);
      return response.data;
    },
    onSuccess: (updatedUser) => {
      if (updatedUser && typeof updatedUser === 'object') {
        queryClient.setQueryData(USER_QUERY_KEY, updatedUser);
      } else {
        queryClient.invalidateQueries({ queryKey: USER_QUERY_KEY });
      }
    },
  });
};