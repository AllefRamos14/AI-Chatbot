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

      {/* <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
        pauseOnHover
        newestOnTop
      /> */}

      <ToastContainer
  position={window.innerWidth <= 768 ? "bottom-center" : "top-right"}
  autoClose={2500}
  theme="dark"
  pauseOnHover
  newestOnTop
  closeOnClick
  draggable
  limit={3}
  toastStyle={{
    width: window.innerWidth <= 768 ? "90vw" : "350px",
    borderRadius: "14px",
    fontSize: window.innerWidth <= 768 ? "14px" : "15px",
    padding: "12px",
    marginBottom: "10px",
  }}
/>
    </ThemeProvider>
  </React.StrictMode>
);