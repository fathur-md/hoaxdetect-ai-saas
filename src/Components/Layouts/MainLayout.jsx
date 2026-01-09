import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../Navigation/Navbar";

export const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-dvh flex-col antialiased">
      <Navbar />
      <main key={location.key}>
        <Outlet />
      </main>
    </div>
  );
};
