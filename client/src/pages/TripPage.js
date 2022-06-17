import React from "react";
import AddVisit from "../components/AddVisit";
import PlanCard from "../components/PlanCard";
import FactCard from "../components/FactCard";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_TRIP } from "../utils/queries";
import AddFact from "../components/AddFact";
import "../style/background.css";

const Trip = () => {
  const { tripId } = useParams();

  const { loading, data } = useQuery(QUERY_TRIP, {
    variables: { tripId: tripId },
  });

  const plans = data?.trip.plans || {};
  const facts = data?.trip.facts || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  const eatPlans = plans.filter(
    (plan) => plan.category.toLowerCase() === "eat"
  );
  const visitPlans = plans.filter(
    (plan) => plan.category.toLowerCase() === "visit"
  );
  const activityPlans = plans.filter(
    (plan) => plan.category.toLowerCase() === "activity"
  );

  return (
    <div className="">
      <div className="">
        <div className="container mt-3">
          <div className="row row-eq-height">
            <div className="col-md-3">
              <h3 className="">Eat</h3>
              <AddVisit category="eat" />
              <PlanCard plans={eatPlans} tripId={tripId} />
            </div>
            <div className="col-md-3">
              <h3 className="">Visit</h3>
              <AddVisit category="visit" />
              <PlanCard plans={visitPlans} tripId={tripId} />
            </div>
            <div className="col-md-3">
              <h3 className="">Activity</h3>
              <AddVisit category="activity" />
              <PlanCard plans={activityPlans} tripId={tripId} />
            </div>
            <div className="col-md-3">
              <h3 className="">Facts</h3>
              <AddFact />
              <FactCard facts={facts} tripId={tripId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trip;
