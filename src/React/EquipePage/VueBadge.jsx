import React, { useState, useEffect } from "react";
import axios from "axios";

const VueBadge = ({ id }) => {
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
      <ul>
        {quête.map((one, index) => (
          <li key={index}>{one.activite_nom}</li>
        ))}
      </ul>
    </div>
  );
};

export default VueBadge;
