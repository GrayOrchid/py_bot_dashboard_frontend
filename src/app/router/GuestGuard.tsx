import { Navigate, Outlet } from "react-router-dom";

export const GuestGuard = () => {
  const isAuth = !!localStorage.getItem('auth_token');

  if (isAuth) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};