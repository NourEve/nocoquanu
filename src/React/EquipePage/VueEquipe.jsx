import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const VueEquipe = () => {
  const [equipe, setEquipe] = useState([]);
  const { equipeId } = useParams();

  useEffect(() => {
    axios({
      method: "get",
      url: `https://test.hugoorickx.tech/chi/${equipeId}`,
      responseType: "json",
    }).then((res) => {
      setEquipe(res.data.message);
    });
  }, []);

  console.log(equipe);

  return (
    <div>
      <h1>{equipe[0].groupe_nom}</h1>
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
