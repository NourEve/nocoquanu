import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavigationMap from "./NavigationMap";

const MapPage = () => {
  const [nomGroupe, setNomGroupe] = useState([]);
  const [IDEquipe, setIDEquipe] = useState("");
  const [isLink, setIsLink] = useState([]);
  const [isParag, setIsParag] = useState([]);

  useEffect(() => {
    const ID_log = localStorage.getItem("ID_log");
    if (ID_log) {
      // Récupère l'ID_log depuis le local storage
      setIDEquipe(ID_log);
      axios({
        method: "get",
        url: "https://test.hugoorickx.tech/gro/all",
        responseType: "json",
      }).then((res) => {
        setNomGroupe(res.data.message);
      });
    }
  }, []);

  useEffect(() => {
    const isLink = [];
    const isParag = [];
    nomGroupe.map((nom) => {
      if (nom.ID_log === IDEquipe) {
        isLink.push(nom);
      } else {
        isParag.push(nom);
      }
    });
    setIsLink(isLink);
    setIsParag(isParag);
  }, [IDEquipe, nomGroupe]);

  return (
    <div className="mapPage">
      <div className="mapPage__divLink">
        {isLink.map((nom, index) => (
          <Link
            key={index}
            to={`/equipe/accueil`}
            className="mapPage__divLink__link"
          >
            {nom.nom}
          </Link>
        ))}
      </div>
      <div className="mapPage__parag">
        {isParag.map((nom, index) => (
          <p key={index} className="mapPage__parag__one">
            {nom.nom}
          </p>
        ))}
      </div>
      <NavigationMap />
    </div>
  );
};

export default MapPage;
