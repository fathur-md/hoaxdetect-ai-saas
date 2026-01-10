import { HashRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./Components/Layouts/MainLayout";
import { LandingPage } from "./Components/Pages/LandingPage";
import { DetectorTool } from "./Components/Pages/DetectorTool";
import { Technology } from "./Components/Pages/Technology";
import { PricingPage } from "./Components/Pages/PricingPage";
import { AboutPage } from "./Components/Pages/AboutPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/app" element={<DetectorTool />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
