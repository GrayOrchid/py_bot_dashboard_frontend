import { Navigate, Outlet, useLocation } from "react-router-dom";

export const AuthGuard = () => {
  const isAuth = !!localStorage.getItem('auth_token');
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return <Outlet />;
};