import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "./styled/reset";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { TypeTheme } from "./type";
import React from "react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = {
  "main-dark-100": "#313640",
  "main-dark-200": "#282c34",
  "main-dark-300": "#272B33",
  "main-blue-200": "#93A2BF",
  "main-blue-100": "#626C80",
  "white-200": "#F6F9F0",
} as TypeTheme;

root.render(
  <BrowserRouter>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);

reportWebVitals();
