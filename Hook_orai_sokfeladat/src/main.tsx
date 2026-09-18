import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Penzvalto from "./pages/penzvalto";
// import App from "./App.tsx";
// import Homerseklet from "./pages/homerseklet.tsx";
// import Szamologep from "./pages/szamologep.tsx";
// import Bmi from "./pages/bmikalk.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Homerseklet/> */}
    {/* <Szamologep /> */}
    {/* <Bmi /> */}
    <Penzvalto />
  </StrictMode>,
);
