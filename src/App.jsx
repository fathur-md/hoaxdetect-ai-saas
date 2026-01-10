import { HashRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./Components/Layouts/MainLayout";
import { LandingPage } from "./Components/Pages/LandingPage";
import { About } from "./Components/Pages/About";
import { Contact } from "./Components/Pages/Contact";
import { AppPage } from "./Components/Pages/AppPage";
import { MethodPage } from "./Components/Pages/MethodPage";
import { Pricing } from "./Components/Pages/Pricing";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/app" element={<AppPage />} />
          <Route path="/methodology" element={<MethodPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
