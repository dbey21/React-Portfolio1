import React from "react";


function PortfolioItem({ image, name }) {
  return (
    <div className="PortfolioItem">
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{name}</h1>
    </div>
  );
}

export default PortfolioItem;
