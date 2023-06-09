import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./components/App";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { defaultTheme } from "./util/theme";

const container = document.getElementById("root");
const root = container && ReactDOMClient.createRoot(container);
root?.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={defaultTheme}>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
