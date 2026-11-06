import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Homepage } from "./pages/Homepage";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { OnePizza } from "./pages/OnePizza";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/p/:id" element={<OnePizza />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer theme="colored" position="top-right" />,
  </StrictMode>
);
