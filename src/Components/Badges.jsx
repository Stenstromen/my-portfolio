import React from "react";
import BadgesList from "./BadgesList";
import Badge from "./Badge";

function Badges() {
  const BadgesArray = Object.entries(BadgesList);
  return (
    <>
      {BadgesArray.map((badge, index) => {
        return <Badge width={badge[1].width} height={badge[1].height} className="Badge" key={index} alt={badge[0]} src={badge[1].src} />;
      })}
    </>
  );
}

export default Badges;
