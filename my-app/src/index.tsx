import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "overmind-react";
import { overmind } from "./services/config";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider value={overmind}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
