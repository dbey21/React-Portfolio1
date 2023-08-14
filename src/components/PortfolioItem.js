import React from "react";

function PorfolioItem({ image, name }) {
  return (
    <div className="PorfolioItem">
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{name}</h1>
    </div>
  );
}

export default PorfolioItem;
