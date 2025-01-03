import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./layout/Applayout.tsx";
import HomePage from "./Home.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Applayout />,
		errorElement: <div>Page Not available</div>,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "about",
				element: <AboutPage />,
			},
			{
				path: "projects",
				element: <ProjectsPage />,
			},
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
