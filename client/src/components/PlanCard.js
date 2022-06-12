import React from "react";

const PlanCard = ({ plans }) => {
  // plans.map((plan) => console.log(plan.name));

  return (
    <div>
      {plans.map((plan) => (
        <div className={`card my-3 ${plan.status ? "border-success" : ""}`}>
          <div className="card-body">
            <h5 className="card-title">{plan.name}</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{plan.location}</li>
              <li className="list-group-item">{plan.notes}</li>
            </ul>
          </div>
          <div className="card-footer">Footer</div>
        </div>
      ))}
    </div>
  );
};

export default PlanCard;
