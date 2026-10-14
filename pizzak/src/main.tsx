import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./pages/Cart";
import NavigationBar from "./pages/NavigationBar";
import Pizzas from "./pages/Pizzas";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NavigationBar />
    <hr />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pizzas" element={<Pizzas />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
