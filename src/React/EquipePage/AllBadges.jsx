import React, { useState, useRef } from "react";
import VueBadge from "./VueBadge";
import { useOutsideClick } from "@chakra-ui/react";

const AllBadges = () => {
  const badgesArray = [
    {
      nom: "Feu n°1",
      url: "../../public/assets/badge_feu_1.webp",
      id: "3",
    },
    {
      nom: "Feu n°2",
      url: "../../public/assets/badge_feu_2.webp",
      id: "3",
    },
    {
      nom: "Eau n°1",
      url: "../../public/assets/badge_eau_1.webp",
      id: "2",
    },
    {
      nom: "Eau n°2",
      url: "../../public/assets/badge_eau_2.webp",
      id: "2",
    },
    {
      nom: "Campement n°1",
      url: "../../public/assets/badge_campement_1.webp",
      id: "5",
    },
    {
      nom: "Campement n°2",
      url: "../../public/assets/badge_campement_2.webp",
      id: "5",
    },
    {
      nom: "Nourriture n°1",
      url: "../../public/assets/badge_nourriture_1.webp",
      id: "4",
    },
    {
      nom: "Nourriture n°2",
      url: "../../public/assets/badge_nourriture_2.webp",
      id: "4",
    },
    {
      nom: "Hygiène n°1",
      url: "../../public/assets/badge_hygiène_1.webp",
      id: "6",
    },
    {
      nom: "Hygiène n°2",
      url: "../../public/assets/badge_hygiène_2.webp",
      id: "6",
    },
  ];

  const [activeBadgeIndex, setActiveBadgeIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useOutsideClick({
    ref: ref,
    handler: () => setActiveBadgeIndex(-1),
  });

  const handleClick = (index) => {
    setActiveBadgeIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="badges__wrapper">
      <h1>Badges</h1>
      <div className="badges__allwrapper">
        {badgesArray.map((badge, index) => (
          <button
            className="badges__wrapper__buttons"
            key={index}
            onClick={() => handleClick(index)}
          >
            <img src={badge.url} alt={"badge de/du " + badge.nom} />
          </button>
        ))}
        {activeBadgeIndex !== -1 && isOpen && (
          <div ref={ref} className="badge__popup">
            <VueBadge
              title={badgesArray[activeBadgeIndex].nom}
              id={badgesArray[activeBadgeIndex].id}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBadges;
