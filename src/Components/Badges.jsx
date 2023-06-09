import React from "react";
import BadgesList from "./BadgesList";
import Badge from "./Badge";

function Badges() {
  const BadgesArray = Object.entries(BadgesList);

  return (
    <>
      {BadgesArray.map((badge, index) => {
        return <Badge className="Badge" key={index} alt={badge[0]} src={badge[1]} />;
      })}
    </>
  );
}

export default Badges;
