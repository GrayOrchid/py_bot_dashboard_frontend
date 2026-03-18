import { type ReactNode, useEffect } from "react";
import { useIsAuth, sessionActions } from "@/entities/session";
import "@/shared/config/index";

interface ProvidersProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: ProvidersProps) => {
  const isAuth = useIsAuth();

  useEffect(() => {
    if (isAuth) {
      sessionActions.refreshUser();
    }
  }, []);

  return <>{children}</>;
};