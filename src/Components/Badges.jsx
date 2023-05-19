import React from "react";
import BadgesList from "./BadgesList";

function Badges() {
  const BadgesArray = Object.entries(BadgesList);

  return (
    <>
      {BadgesArray.map((badge, index) => {
        return (
          <>
            <img key={index} className="Badge" alt={badge[0]} src={badge[1]} />
          </>
        );
      })}
    </>
  );
}

export default Badges;
