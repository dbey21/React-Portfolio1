import React from "react";
import PortfolioItem from "../components/PortfolioItem";
import proj1 from "../assests/proj1.jpg";
import "../styles/Portfolio.css";


function Portfolio() {
  return (
    <div className="portfolio">
      <h1>My Portfolio</h1>
      <div className="PortfolioList">
        <PortfolioItem name="ORM application" image={proj1} />
      
      </div>
    </div>
  );
}

export default Portfolio;
