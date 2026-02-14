import { Suspense, type ReactNode,  } from "react";
import "@/shared/config/index";

interface ProvidersProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: ProvidersProps) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
       {children}
    </Suspense>
  );
};