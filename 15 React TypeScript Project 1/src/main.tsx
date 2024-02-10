import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme.ts";
import { CssBaseline } from "@mui/material";

ThemeProvider;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* // FOR BASIC CSS PROPERTIES */}
      {/* NOW WE CAN USE MUI IN OUR APP  */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
