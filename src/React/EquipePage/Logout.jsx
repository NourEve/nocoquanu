import React, { useState } from "react";
import IconPowerOff from "../../assets/IconPowerOff";
import { redirect } from "react-router-dom";

const Logout = () => {
  const [isLoggedin, setIsLoggedin] = useState("");

  const logout = () => {
    const ID_log = localStorage.getItem("ID_log");
    if (ID_log) {
      localStorage.removeItem("ID_log");
      window.location.href = "/";
    }
  };

  return (
    <button onClick={logout} className="button__logout">
      <IconPowerOff />
    </button>
  );
};

export default Logout;
