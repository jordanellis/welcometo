import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './components/App';
import { createTheme, ThemeProvider, StyledEngineProvider } from "@mui/material/styles";

const TEXT_COLOR = "#dfcfb2";

const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#103d6e",
		},
		secondary: {
			main: "#4889cf",
		},
		background: {
			default: "#101a28",
			paper: "#192B3D"
		},
		text: {
			primary: TEXT_COLOR,
			secondary: TEXT_COLOR+"90"
		}
	},
	typography: {
		allVariants: {
			color: TEXT_COLOR
		}
	}
});

const container = document.getElementById('root');
const root = container && ReactDOMClient.createRoot(container);
root?.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
