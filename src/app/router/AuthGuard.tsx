import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useIsAuth } from "@/entities/session"; 

export const AuthGuard = () => {
  const isAuth = useIsAuth(); 
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return <Outlet />;
};