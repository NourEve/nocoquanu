import React, { useEffect, useState } from "react";
import axios from "axios";
import IconMap from "../../assets/IconMap";
import { NavLink } from "react-router-dom";
function TutoPage() {
  const [selectedCategory, setSelectedCategory] = useState(2);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://test.hugoorickx.tech/enc/${selectedCategory}`)
      .then((response) => setData(response.data.message))
      .catch((error) => console.error(error));
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <main>
      <div className="tutopage">
      <h1>Tuto</h1>
      <div className="selector">
        <button onClick={() => handleCategoryClick(2)}>Eau</button>
        <button onClick={() => handleCategoryClick(3)}>Feu</button>
        <button onClick={() => handleCategoryClick(4)}>Nourriture</button>
        <button onClick={() => handleCategoryClick(5)}>Camp</button>
        <button onClick={() => handleCategoryClick(6)}>Hygiène</button>
      </div>
      <div className="data">
        {data.length > 0 ? (
          data.map((item) => (
            <details key={item.ID_ency}>
              <summary>{item.Nom}</summary>
              <p>{item.Tuto}</p>
            </details>
          ))
        ) : (
          <details>
            <summary>Données non trouvées</summary>
            <p>Veuillez sélectionner une autre catégorie.</p>
          </details>
        )}
      </div>
      </div>
      <div className="nav">
      <NavLink to={"/map"}>
      <IconMap width="10vw" />
      </NavLink>
      </div>
    </main>
  );
}

export default TutoPage;
