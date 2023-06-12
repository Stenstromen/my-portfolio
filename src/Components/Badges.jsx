import React from "react";
import BadgesList from "./BadgesList";
import Badge from "./Badge";

function Badges() {
  const BadgesArray = Object.entries(BadgesList);
  console.log(BadgesArray);
  return (
    <>
      {BadgesArray.map((badge, index) => {
        return <Badge width={badge[1].width} height="43px" className="Badge" key={index} alt={badge[0]} src={badge[1].src} />;
      })}
    </>
  );
}

export default Badges;
