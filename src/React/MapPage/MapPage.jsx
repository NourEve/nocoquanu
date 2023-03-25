import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const MapPage = () => {
  const [nomGroupe, setNomGroupe] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://test.hugoorickx.tech/gro/all",
      responseType: "json",
    }).then((res) => {
      setNomGroupe(res.data.message);
    });
  }, []);

  return (
    <div>
      {nomGroupe.map((nom, index) => (
        <Link key={index} to={`/equipe/${nom.ID_log}`}>
          {nom.nom}
        </Link>
      ))}
    </div>
  );
};

export default MapPage;
