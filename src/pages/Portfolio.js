import React from "react";
import PortfolioItem from "../components/PortfolioItem";
//import img
function Portfolio() {
  return (
    <div className="Portfolio">
      <h1>My Portfolio</h1>
      <div className="PortfolioList">
        <PortfolioItem name="Social Media Website" imgage />
        <PortfolioItem />
      </div>
    </div>
  );
}

export default Portfolio;
