import React from "react";
import { Link } from "react-router-dom";

const MapPage = () => {
  return (
    <div>
      <Link to={"/equipe"}>
        <h2>Equipe 1</h2>
      </Link>
      <Link to={"/equipe"}>
        <h2>Equipe 2</h2>
      </Link>
      <Link to={"/equipe"}>
        <h2>Equipe 3</h2>
      </Link>
      <Link to={"/equipe"}>
        <h2>Equipe 4</h2>
      </Link>
    </div>
  );
};

export default MapPage;
