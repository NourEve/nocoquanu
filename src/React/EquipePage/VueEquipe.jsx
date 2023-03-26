import React, { useEffect, useState } from "react";
import axios from "axios";
//import { useOutletContext } from "react-router-dom";

const VueEquipe = () => {
  const [equipe, setEquipe] = useState([]);
  const [idEquipe, setIdEquipe] = useState("");

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

  console.log(idEquipe);
  console.log(equipe);

  return (
    <div>
      <h1>{equipe.groupe_nom}</h1>
      <ul>
        {equipe.map((personne, index) => (
          <li key={index}>{personne.enfant_nom}</li>
        ))}
      </ul>
      <h2>Quêtes journalières : 13</h2>
      <h2>3 / 10 badges</h2>
    </div>
  );
};

export default VueEquipe;
