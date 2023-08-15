import React from "react";
import PortfolioItem from "../components/PortfolioItem";
import proj1 from "../assets/proj1.jpg"
import proj2 from "../assets/proj2.jpg";
import proj3 from "../assets/proj3.jpg";
import "../styles/Portfolio.css";


function Portfolio() {
  return (
    <div className="portfolio">
      <h1>My Portfolio</h1>
      <div className="PortfolioList">
        <PortfolioItem name="ORM application" image={proj2} />
        <PortfolioItem name="Calendar Creator" image={proj1} />
        <PortfolioItem name="Express.js:Note Taker" image={proj3} />
      
      </div>
    </div>
  );
}

export default Portfolio;
