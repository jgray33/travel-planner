import { useQuery } from "@apollo/client";
import React from "react";
import AddTrip from "../components/AddTrip";
import UserTripCards from "../components/UserTripCards";
import { useParams } from "react-router-dom";
import { QUERY_USER } from "../utils/queries";
import "../style/background.css";
const dayjs = require("dayjs");

const UserDashboard = () => {
  const { username } = useParams();

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { username: username },
  });
  const userProfile = data?.user || {};
  const userTrips = userProfile.trips;

  if (loading) {
    return <div>Loading...</div>;
  }

  // Checks if the endDate was before today
  const previousTrips = userTrips.filter(
    (trip) => dayjs(trip.endDate).diff(dayjs().format("YYYY-MM-DD")) < 0
  );

  const futureTrips = userTrips.filter(
    (trip) => dayjs(trip.startDate).diff(dayjs().format("YYYY-MM-DD")) >= 0
  );

  // userTrips.forEach((trip) => {
  //   console.log(trip.tripName);
  //   console.log("Difference between trip start date and today in ms");
  //   console.log(dayjs(trip.startDate).diff(dayjs().format("YYYY-MM-DD")));
  //   console.log("Difference between trip end date and today in ms");
  //   console.log(dayjs(trip.endDate).diff(dayjs().format("YYYY-MM-DD")));
  // });

  return (
    <div className="container mt-3">
      <div className="row mb-3 d-flex">
        <div className="col">
          <h3 className="display-6">My trips</h3>
        </div>
        <div className="col d-flex justify-content-end">
          <AddTrip />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 order-md-2">
          <h4 className="fs-4">Current & Upcoming Trips</h4>
          <UserTripCards trips={futureTrips} />
        </div>
        <div className="col-md-6 order-md-1">
          <h4 className="fs-4">Previous Trips</h4>
          <UserTripCards trips={previousTrips} />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
