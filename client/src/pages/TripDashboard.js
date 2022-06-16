import { useQuery } from "@apollo/client";
import React from "react";
import Welcome from "../components/Welcome";
import AddTrip from "../components/AddTrip";
import UserTripCards from "../components/UserTripCards";
import { useParams } from "react-router-dom";
import { QUERY_USER } from "../utils/queries";
const dayjs = require("dayjs");

const UserDashboard = () => {
  const { username } = useParams();

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { username: username },
  });
  const userProfile = data?.user || {};
  console.log(userProfile.trips);
  const userTrips = userProfile.trips;

  console.log("~~~~~~~~~");
  console.log(dayjs("2022-11-06T00:00:00.000+00:00"));
  console.log(userTrips);

  if (loading) {
    return <div>Loading...</div>;
  }

  const now = dayjs();
  console.log(`Now: ${now}`);

  // const previousTrips = userTrips.filter((trip) => dayjs(trip.endDate) < now);
  // const futureTrips = userTrips.filter((trip) => dayjs(trip.startDate) >= now);

  const previousTrips = userTrips;
  const futureTrips = userTrips;

  return (
    <div className="container">
      <div className="row mb-3 d-flex">
        <div className="col">
          <h3 className="display-6">My trips</h3>
        </div>
        <div className="col d-flex justify-content-end">
          <AddTrip />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h4 className="fs-4">Previous Trips</h4>
          <UserTripCards trips={previousTrips} />
        </div>
        <div className="col-md-6">
          <h4 className="fs-4">Upcoming Trips</h4>
          <UserTripCards trips={futureTrips} />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
