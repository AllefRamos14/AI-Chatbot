import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";
import { GlobalStyles } from "./styles/GlobalStyles";
import { darkTheme } from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />

      <App />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
        pauseOnHover
        newestOnTop
      />
    </ThemeProvider>
  </React.StrictMode>
);