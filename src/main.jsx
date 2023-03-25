import React from "react";
import ReactDOM from "react-dom/client";
import Loginpage from "./React/Loginpage/Loginpage";
import MapPage from "./React/MapPage/MapPage";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EquipePage from "./React/EquipePage/EquipePage";
import TutoPage from "./React/TutoPage/TutoPage";
import VueEquipe from "./React/EquipePage/VueEquipe";
import AllBadges from "./React/EquipePage/AllBadges";
import Defis from "./React/EquipePage/Defis";

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
    children: [
      {
        path: "",
        element: <VueEquipe />,
      },
      {
        path: "badges",
        element: <AllBadges />,
      },
      {
        path: "defis",
        element: <Defis />,
      },
    ],
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
