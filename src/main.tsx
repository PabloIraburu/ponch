import { createRoot } from "react-dom/client";
import Dashboard from "./pages/dashboards/Dashboard.tsx";

createRoot(document.getElementById("root") as HTMLElement).render(
    <Dashboard />
);