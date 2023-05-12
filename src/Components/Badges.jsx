import React from "react";
import BadgesList from "./BadgesList";

function Badges() {
  const style = {
    paddingLeft: "15px",
    paddingRight: "15px",
    marginLeft: "15px",
    marginRight: "15px",
    paddingTop: "15px",
  };
  const BadgesArray = Object.entries(BadgesList);

  return (
    <>
      {BadgesArray.map((badge, index) => {
        return (
          <>
            <img key={index} style={style} alt={badge[0]} src={badge[1]} />
          </>
        );
      })}
    </>
  );
}

export default Badges;
