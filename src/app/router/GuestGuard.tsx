import { Navigate, Outlet } from "react-router-dom";
import { useIsAuth } from "@/entities/session"; 

export const GuestGuard = () => {
  const isAuth = useIsAuth(); 

  if (isAuth) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};