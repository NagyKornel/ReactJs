import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { OnePage } from "./pages/OnePage";
import { Homepage } from "./pages/Hompage";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/p/:id" element={<OnePage />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer theme="colored" position="top-right" />
  </StrictMode>,
);
