import { HashRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./Components/Layouts/MainLayout";
import { LandingPage } from "./Components/Pages/LandingPage";
import { About } from "./Components/Pages/About";
import { Contact } from "./Components/Pages/Contact";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
