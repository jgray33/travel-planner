import React from "react";

const FactCard = ({ facts }) => {
  facts.map((fact) => console.log(fact));

  return (
    <div>
      {facts.map((fact) => (
        <div className="card my-3">
          <div className="card-body">
            <p className="card-title">{fact.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FactCard;
