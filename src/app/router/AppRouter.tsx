import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AuthGuard } from "./AuthGuard";
import { GuestGuard } from "./GuestGuard";



const AuthPage = lazy(() => 
    import("@pages/auth-page").then(m => ({ default: m.AuthPage }))
);

const DashboardPage = lazy(() => 
    import("@pages/dashboard-page").then(m => ({ default: m.DashboardPage }))
);


const SuspenseLayout = () => (
    <Suspense >
        <Outlet />
    </Suspense>
);

export const router = createBrowserRouter([
    {
        element: <GuestGuard />,
        children: [
            {
                element: <SuspenseLayout />,
                children: [
                    { path: "/auth", element: <AuthPage /> },
                ],
            },
        ],
    },
    {
        element: <AuthGuard />,
        children: [
            {
                element: <SuspenseLayout />,
                children: [
                    { path: "/dashboard", element: <DashboardPage /> },
                ],
            },
        ],
    },
    { path: "/", element: <Navigate to="/dashboard" replace /> },
    { path: "*", element: <Navigate to="/dashboard" replace /> },
]);