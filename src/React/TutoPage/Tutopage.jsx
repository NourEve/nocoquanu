import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function TutoPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://test.hugoorickx.tech/enc/${selectedCategory}`)
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, [selectedCategory]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <main>
      <h2>Tuto</h2>
      <div className="Selector">
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="all">Toutes</option>
          <option value="eau">Eau</option>
          <option value="feu">Feu</option>
          <option value="nourriture">Nourriture</option>
          <option value="camp">Camp</option>
          <option value="hygiène">Hygiène</option>
        </select>
      </div>
      <div className="Data">
        {data.map(item => (
          <details key={item.id} className={item.category}>
            <summary>{item.nom}</summary>
            <p>{item.tuto}</p>
          </details>
        ))}
      </div>
    </main>
  );
};

export default TutoPage;




