import React, { userState } from "react";
import { Link } from "react-router-dom";
// import { useMutation } from '@apollo/client'

import Auth from "../utils/auth";

const Home = () => {
  const userId = Auth.getUser()?.data?.username;
  console.log(userId);

  return (
    <div>
      <h2> Home Page</h2>
      <Link className="btn" to={`/users/${userId}`}>
        {" "}
        <button className="btn btn-primary">Go to your dashboard</button>
      </Link>
    </div>
  );
};

export default Home;
