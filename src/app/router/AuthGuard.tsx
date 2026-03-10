import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useLocalStorage } from "@/shared/lib/hooks";

export const AuthGuard = () => {
  const [token] = useLocalStorage('auth_token', null);
  const location = useLocation();

  if (!token) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return <Outlet />;
};