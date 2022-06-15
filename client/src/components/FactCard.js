import React from "react";
import EditFact from "./EditFact";

const FactCard = ({ facts }) => {
  facts.map((fact) => console.log(fact));

  return (
    <div>
      {facts.map((fact) => (
        <div className="card my-3" key={fact._id}>
          <div className="card-body">
            <p className="card-title">{fact.description}</p>
          </div>
          <EditFact factId={fact._id}
          description={fact.description}/>
        </div>
      ))}
    </div>
  );
};

export default FactCard;
