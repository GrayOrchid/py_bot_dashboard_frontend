import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AuthGuard } from "./AuthGuard";
import { GuestGuard } from "./GuestGuard";
import { MainLayout } from "../layouts/MainLayout";

const AuthPage = lazy(() => 
    import("@pages/auth-page").then(m => ({ default: m.AuthPage }))
);

const DashboardPage = lazy(() => 
    import("@pages/dashboard-page").then(m => ({ default: m.DashboardPage }))
);


const DiscordPage = lazy(() => 
    import("@pages/discord-page").then(m => ({ default: m.DiscordPage }))
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
                element: <MainLayout />, 
                children: [
                    {
                        element: <SuspenseLayout />,
                        children: [
                            { path: "/dashboard", element: <DashboardPage /> },
                            { path: "/discord", element: <DiscordPage /> },
                        ],
                    },
                ],
            },
        ],
    },
    { path: "/", element: <Navigate to="/dashboard" replace /> },
    { path: "*", element: <Navigate to="/dashboard" replace /> },
]);