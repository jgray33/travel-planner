import React from "react";
import DeleteFact from "./DeleteFact";
import EditFact from "./EditFact";

const FactCard = ({ tripId, facts }) => {
  return (
    <div>
      {facts.map((fact) => (
        <div className="card my-3" key={fact._id}>
          <div className="card-body">
            <p className="card-title">{fact.description}</p>
          </div>
          <div className="card-footer">
            <div className="row">
              <div className="col">
                <DeleteFact factId={fact._id} tripId={tripId} />
              </div>
              <div className="col text-end">
              <EditFact factId={fact._id} description={fact.description} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FactCard;
