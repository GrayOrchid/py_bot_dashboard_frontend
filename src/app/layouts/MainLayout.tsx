import { Outlet } from "react-router-dom";
import { Sidebar } from "@/widgets/sidebar";
import { useIsAuth } from "@/entities/session";
import { useCurrentUser } from "@/entities/user";

export const MainLayout = () => {
  const isAuth = useIsAuth();
  const { isLoading } = useCurrentUser(isAuth);

  if (isLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
        <span>Загрузка панели управления...</span>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <main style={{ flexGrow: 1 }}>
        <Outlet />
      </main>
    </div>
  );
};