import { useQuery } from "@apollo/client";
import React from "react";
import Welcome from "../components/Welcome";
import AddTrip from "../components/AddTrip";
import UserTripCards from '../components/UserTripCards'

const UserDashboard = () => {
  // const {loading, data } = useQuery(QUERY_USER,)
  // const styles = {

  // }

  return (
    <div className="container fluid">
      <div className="row">
      <Welcome />
      </div>
      <div className="row">
        <UserTripCards/>
      </div>
      <div className="row">
        <AddTrip />
      </div>
    </div>
  );
};

export default UserDashboard;
