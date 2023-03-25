import React from "react";
import ReactDOM from "react-dom/client";
import Loginpage from "./React/Loginpage/Loginpage";
import MapPage from "./React/MapPage/MapPage";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EquipePage from "./React/EquipePage/EquipePage";
import TutoPage from "./React/TutoPage/TutoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Loginpage />,
    errorElement: <Loginpage />,
  },
  {
    path: "/map",
    element: <MapPage />,
  },
  {
    path: "/equipe",
    element: <EquipePage />,
  },
  {
    path: "/tuto",
    element: <TutoPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
