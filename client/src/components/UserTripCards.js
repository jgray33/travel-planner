import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";

import { QUERY_ME } from "../utils/queries";

import Auth from '../utils/auth'

const UserTripCards = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_ME);

  return (
    <div>
      <h1> Cards</h1>
      <h2> Data: {data} </h2>
    </div>
  );
};

export default UserTripCards;
