import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthPage, DashboardPage } from "@/pages";

const isAuth = false; 

export const router = createBrowserRouter([
  {
    path: "/",
    element: isAuth ? <Navigate to="/dashboard" replace /> : <AuthPage />,
  },
  {
    path: "/dashboard",
    element: isAuth ? <DashboardPage /> : <Navigate to="/" replace />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />, 
  },
]);