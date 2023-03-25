import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
=======
import Loginpage from "./React/Loginpage/Loginpage";
import MapPage from "./React/MapPage/MapPage";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Loginpage />
    <MapPage />
>>>>>>> dev
  </React.StrictMode>
);
