import React from "react";

const AllBadges = () => {
  const BadgesArray = [
    {
      nom: "Feu n°1",
      url: "../../public/assets/badge_feu_1.webp",
    },
    {
      nom: "Feu n°2",
      url: "../../public/assets/badge_feu_2.webp",
    },
    {
      nom: "Eau n°1",
      url: "../../public/assets/badge_eau_1.webp",
    },
    {
      nom: "Eau n°2",
      url: "../../public/assets/badge_eau_2.webp",
    },
    {
      nom: "Campement n°1",
      url: "../../public/assets/badge_campement_1.webp",
    },
    {
      nom: "Campement n°2",
      url: "../../public/assets/badge_campement_2.webp",
    },
    {
      nom: "Nourriture n°1",
      url: "../../public/assets/badge_nourriture_1.webp",
    },
    {
      nom: "Nourriture n°2",
      url: "../../public/assets/badge_nourriture_2.webp",
    },
    {
      nom: "Hygiène n°1",
      url: "../../public/assets/badge_hygiène_1.webp",
    },
    {
      nom: "Hygiène n°2",
      url: "../../public/assets/badge_hygiène_2.webp",
    },
  ];
  return (
    <div className="badges__wrapper">
      <h1>Badges</h1>
      {BadgesArray.map((badge, index) => (
        <button className="badges__wrapper__buttons" key={index}>
          <img src={badge.url} alt={"badge de/du " + badge.nom} />
          <h3>{badge.nom}</h3>
        </button>
      ))}
    </div>
  );
};

export default AllBadges;
