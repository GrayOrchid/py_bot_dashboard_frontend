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

const PageLoader = () => (
    <div className="h-screen w-full flex items-center justify-center text-gray-500 font-sans">
        Загрузка...
    </div>
);

const SuspenseLayout = () => (
    <Suspense fallback={<PageLoader />}>
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