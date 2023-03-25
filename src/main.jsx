import React from "react";
import ReactDOM from "react-dom/client";
import Loginpage from "./React/Loginpage/Loginpage";
import MapPage from "./React/MapPage/MapPage";
import "./index.scss";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import Equipepage from "./React/Equipe/Equipepage";
import Tutopage from "./React/Tuto";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Loginpage/>,
    errorElement: <Loginpage/>,
  },
  {
    path: "/map",
    element: <MapPage/>,
  },
  {
    path: "/equipe",
    element: <Equipepage/>,
  },
  {
    path: "/tuto",
    element: <Tutopage/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
