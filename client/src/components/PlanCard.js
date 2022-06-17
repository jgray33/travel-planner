import React from "react";
import EditPlan from "./EditPlan";
import DeletePlan from "./DeletePlan";

const PlanCard = ({ tripId, plans }) => {
  return (
    <div>
      {plans.map((plan) => (
        <div
          className={`card my-3 ${plan.status ? "border-success" : ""}`}
          key={plan._id}
        >
          <div className="card-body">
            <h5 className="card-title">{plan.name}</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{plan.location}</li>
              <li className="list-group-item plan-list">{plan.notes}</li>
            </ul>
          </div>
          <div className="card-footer">
            <div className="row">
              <div className="col">
                <DeletePlan planId={plan._id} tripId={tripId} />
              </div>
              <div className="col text-end">
                <EditPlan
                  planId={plan._id}
                  category={plan.category}
                  name={plan.name}
                  location={plan.location}
                  notes={plan.notes}
                  status={plan.status}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlanCard;
