import React, { useState, useEffect } from "react";
import axios from "axios";

const VueBadge = ({ title, id }) => {
  const [quête, setQuête] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://test.hugoorickx.tech/act/2/${id}`,
      responseType: "json",
    }).then((res) => {
      setQuête(res.data.message);
    });
  }, [id]);

  console.log(quête);

  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {quête.map((one, index) => (
          <li key={index}>
            <input type="checkbox" id={id} name={id} />
            <label htmlFor={id}>{one.activite_nom}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VueBadge;
