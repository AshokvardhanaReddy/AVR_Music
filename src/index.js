import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext";
import ReactIconsContextProvider from "./context/ReactIconsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StoreContextProvider>
    <BrowserRouter>
      <ReactIconsContextProvider>
        <App />
      </ReactIconsContextProvider>
    </BrowserRouter>
  </StoreContextProvider>
);
