import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Kezdolap from "./pages/Kezdolap";
import Szamologep from "./pages/szamologep";
import Penzvalto from "./pages/penzvalto";
import Bmi from "./pages/bmikalk";
import Homerseklet from "./pages/homerseklet";
import Notfound from "./pages/Notfound";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Kezdolap />} />
        <Route path="/szamologep" element={<Szamologep />} />
        <Route path="/penzvalto" element={<Penzvalto />} />
        <Route path="/bmi" element={<Bmi />} />
        <Route path="/homerseklet" element={<Homerseklet />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
