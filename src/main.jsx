import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./layout/Root.jsx";

AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root></Root>
  </React.StrictMode>
);
