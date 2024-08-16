import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {EntityView} from "./pages/entityView.tsx";
import Dashboard from "./pages/dashboards/Dashboard.tsx";
import {Movies} from "./pages/movies/movies.tsx";

createRoot(document.getElementById("root") as HTMLElement).render(
    <Dashboard />
);