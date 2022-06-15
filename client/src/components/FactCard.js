import React from "react";
import DeleteFact from "./DeleteFact";
import EditFact from "./EditFact";

const FactCard = ({ tripId,facts }) => {
  return (
    <div>
      {facts.map((fact) => (
        <div className="card my-3" key={fact._id}>
          <div className="card-body">
            <p className="card-title">{fact.description}</p>
          </div>
          <EditFact factId={fact._id} description={fact.description} />
          <DeleteFact factId={fact._id} 
          tripId={tripId}/>
        </div>
      ))}
    </div>
  );
};

export default FactCard;
