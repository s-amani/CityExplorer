import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import { HomePage } from "../../features/home/HomePage";
import CityDashboard from "../../features/cities/dashboard/CityDashboard";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'cities', element: <CityDashboard /> }
        ]
    }
]

export const router = createBrowserRouter(routes);