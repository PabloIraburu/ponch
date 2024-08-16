import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {EntityView} from "./pages/entityView.tsx";
import Dashboard from "./pages/dashboards/Dashboard.tsx";
import {Movies} from "./pages/movies/movies.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: (<Dashboard />),
        children: [
            {
                path: "/:entity",
                element: <EntityView/>,
            },
        ]
    },
    {
        path: "/movies",
        element: <Movies/>,
    },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
    <RouterProvider router={router} />
);