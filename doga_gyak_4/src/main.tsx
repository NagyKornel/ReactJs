import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/HomePage";
import { OneMovie } from "./pages/OneMovie";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/m/:id" element={<OneMovie />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
