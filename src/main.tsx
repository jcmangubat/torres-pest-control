import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.tsx";

import UnderConstruction from "./pages/UnderConstruction.tsx";
import UnderMaintenance from "./pages/UnderMaintenance.tsx";
import { SITE_MODE } from "./config/site-config.ts";

const root = createRoot(document.getElementById("root")!);

const renderApp = () => {
  switch (SITE_MODE) {
    case "construction":
      return <UnderConstruction />;
    case "maintenance":
      return <UnderMaintenance />;
    default:
      return (
        <ThemeProvider defaultTheme="light">
          <App />
        </ThemeProvider>
      );
  }
};

root.render(renderApp());
