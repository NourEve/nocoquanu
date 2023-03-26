import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavigationEquipe from "./NavigationEquipe";

const EquipePage = () => {
  const [idEquipe, setIdEquipe] = useState("");

  useEffect(() => {
    const ID_log = localStorage.getItem("ID_log");
    if (ID_log) {
      // Récupère l'ID_log depuis le local storage
      setIdEquipe(ID_log);
    }
  }, []);

  return (
    <div>
      <Outlet context={[idEquipe, setIdEquipe]} />
      <NavigationEquipe />
    </div>
  );
};

export default EquipePage;
