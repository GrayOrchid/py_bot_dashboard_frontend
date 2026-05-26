import { Outlet } from "react-router-dom";
import { Sidebar } from "@/widgets/sidebar";

export const MainLayout = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar  />
      <main style={{ flexGrow: 1 }}>
        <Outlet />
      </main>
    </div>
  );
};