import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import App from "./App";
import store from "./redux/store";
import { theme } from "./theme";
import { ResetCss } from "./theme/globalStyles";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ResetCss />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
