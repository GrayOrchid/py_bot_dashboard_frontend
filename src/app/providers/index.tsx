import { type ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { sessionActions } from "@/entities/session";
import "@/shared/config/index";

interface ProvidersProps {
  children: ReactNode;
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

queryClient.getQueryCache().config.onError = (error: any) => {
  if (error.response?.status === 401) {
    sessionActions.logout(); 
    queryClient.clear();     
  }
};

export const AppProvider = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};