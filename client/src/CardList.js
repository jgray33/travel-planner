import React from "react";
// import "./cardList.css";
import Card from "./Card";
const CardList = () => {
  return (
    <div className="card">
      <div className="card-text">
        <h1 className="card-title">Card Title</h1>
        <p className="card-description">Short description about this place</p>
      </div>
      <div className="card-list">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardList;
