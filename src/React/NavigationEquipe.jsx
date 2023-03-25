import React from "react";
import { NavLink } from "react-router-dom";
import IconBadge from "../assets/IconBadge";
import IconExclamation from "../assets/IconExclamation";
import IconMap from "../assets/IconMap";
import IconPeopleGroup from "../assets/IconPeopleGroup";
import IconPowerOff from "../assets/IconPowerOff";

const NavigationEquipe = () => {
  return (
    <nav>
      <NavLink to={"/map"}>
        <IconMap />
      </NavLink>
      <NavLink to={"/equipe"}>
        <IconPeopleGroup />
      </NavLink>
      <NavLink to={"/badges"}>
        <IconBadge />
      </NavLink>
      <NavLink to={"/défis"}>
        <IconExclamation />
      </NavLink>
      <NavLink to={"/"}>
        <IconPowerOff />
      </NavLink>
    </nav>
  );
};

export default NavigationEquipe;
