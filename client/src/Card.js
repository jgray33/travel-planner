import React from "react";
// import "./card.css";
// import Card from "react-bootstrap/Card";
import { Card as ReactCard } from "react-bootstrap"

const Card = () => {
  return (
    <div className="c">
      <div className="c-browser">
        <ReactCard
        <div className="c-circle"></div>
        <div className="c-circle"></div>
        <div className="c-circle"></div>
      </div>
    </div>
  );
};

export default Card;
