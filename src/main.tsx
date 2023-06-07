import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <MantineProvider
    withNormalizeCSS
    withGlobalStyles
    theme={{ colorScheme: "dark" }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MantineProvider>
);
