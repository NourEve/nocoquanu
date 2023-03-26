import React, { useEffect, useState } from "react";
import axios from "axios";
//import { useOutletContext } from "react-router-dom";

const VueEquipe = () => {
  const [equipe, setEquipe] = useState([]);
  const [idEquipe, setIdEquipe] = useState("");
  const [nomEquipe, setNomEquipe] = useState("");

  useEffect(() => {
    const ID_log = localStorage.getItem("ID_log");
    if (ID_log) {
      // Récupère l'ID_log depuis le local storage
      setIdEquipe(ID_log);
      axios
        .get(`https://test.hugoorickx.tech/chi/${ID_log}`)
        .then((res) => setEquipe(res.data.message));
    }
  }, []);

  useEffect(() => {
    equipe.map((personne) => setNomEquipe(personne.groupe_nom));
  }, [equipe]);

  return (
    <div className="vueEquipe">
      <h1 className="vueEquipe__h1">{nomEquipe}</h1>
      <ul>
        {equipe.map((personne, index) => (
          <li key={index}>{personne.enfant_nom}</li>
        ))}
      </ul>
      <h2 className="vueEquipe__h2 vueEquipe__h2--quetes">
        Quêtes journalières :{" "}
        <span className="vueEquipe__h2--quetes--nbre">13</span>
      </h2>
      <h2 className="vueEquipe__h2 vueEquipe__h2--badges">
        {" "}
        <span className="vueEquipe__h2--quetes--nbre">3</span> / 10 badges
      </h2>
      <div className="vueEquipe__badges">
        <img src="../../public/assets/badge_feu_1.webp" alt="" />
        <img src="../../public/assets/badge_eau_2.webp" alt="" />
        <img src="../../public/assets/badge_campement_1.webp" alt="" />
      </div>
    </div>
  );
};

export default VueEquipe;
