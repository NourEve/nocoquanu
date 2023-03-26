import React from "react";
import { Link } from "react-router-dom";
import Logout from "../EquipePage/Logout";
import IconBook from "../../assets/IconBook";

const NavigationMap = () => {
  return (
    <nav className="mapPage__navigation">
      <Logout />
      <Link className="mapPage__navigation__link" to={"/tuto"}>
        <IconBook width="7vw" height="7vw" />
      </Link>
    </nav>
  );
};

export default NavigationMap;
