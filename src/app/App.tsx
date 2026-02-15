import { RouterProvider } from "react-router-dom";
import { AppProvider } from "./providers";
import { router } from "./router/AppRouter";

export const App = () => {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
};