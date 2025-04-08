import { createRoot } from "react-dom/client";
import "./commonResource/css/bootstrap.css";
import "./commonResource/css/styles.css";
import { BrowserRouter } from "react-router";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
