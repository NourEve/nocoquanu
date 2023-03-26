import React from "react";
import { NavLink } from "react-router-dom";
import IconBadge from "../../assets/IconBadge";
import IconExclamation from "../../assets/IconExclamation";
import IconMap from "../../assets/IconMap";
import IconPeopleGroup from "../../assets/IconPeopleGroup";
import Logout from "./Logout";

const NavigationEquipe = () => {
  return (
    <nav>
      <NavLink to={"/map"}>
        <IconMap />
      </NavLink>
      <NavLink to={"/equipe/accueil"}>
        <IconPeopleGroup />
      </NavLink>
      <NavLink to={"/equipe/badges"}>
        <IconBadge />
      </NavLink>
      <NavLink to={"/equipe/defis"}>
        <IconExclamation />
      </NavLink>
      <Logout />
    </nav>
  );
};

export default NavigationEquipe;
