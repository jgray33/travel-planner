import { useQuery } from "@apollo/client";
import React from "react";
import Welcome from "../components/Welcome";
import AddTrip from "../components/AddTrip";
import UserTripCards from "../components/UserTripCards";
import { useParams } from "react-router-dom";
import { QUERY_USER } from "../utils/queries";

const UserDashboard = () => {
  const { username } = useParams();

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { username: username },
  });
  const userProfile = data?.user || {};
  console.log(userProfile.trips);
  const userTrips = userProfile.trips;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container fluid">
      <div className="row">
        <Welcome />
      </div>
      <div className="row">
        <UserTripCards trips={userTrips} />
      </div>
      <div className="row">
        <AddTrip />
      </div>
    </div>
  );
};

export default UserDashboard;
