import React from "react";
import { Outlet } from "react-router-dom";
import NavigationEquipe from "./NavigationEquipe";

const EquipePage = () => {
  return (
    <div>
      <p>Test équipe</p>
      <Outlet />
      <NavigationEquipe />
    </div>
  );
};

export default EquipePage;
