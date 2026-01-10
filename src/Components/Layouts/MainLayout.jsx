import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../Navigation/Navbar";
import { Footer } from "../UI/Footer";

export const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-dvh flex-col antialiased">
      <Navbar />
      <main key={location.key} className="flex grow pt-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
