import React from 'react'
import AddVisit from '../components/AddVisit'
import PlanCard from "../components/PlanCard";
import FactCard from "../components/FactCard";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_TRIP } from "../utils/queries";
import AddFact from '../components/AddFact';

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
    <div className="container">
      <div className="row row-eq-height">
        <div className="col-md-3">
          <h6>Eat</h6>
          <PlanCard tripId={tripId}plans={eatPlans} />
        </div>
        <div className="col-md-3">
          <h6>Visit</h6>
          <AddVisit/>
          <PlanCard tripId={tripId} plans={visitPlans} />
        </div>
        <div className="col-md-3">
          <h6>Activity</h6>
          <PlanCard tripId={tripId}plans={activityPlans} />
        </div>
        <div className="col-md-3">
          <h6>Facts</h6>
          <AddFact/>
          <FactCard facts={facts} />
        </div>
      </div>
    </div>
  );
};

export default Trip;
