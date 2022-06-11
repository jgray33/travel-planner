import { assertValidSchema } from "graphql";
import React from "react";

import Auth from "../utils/auth";

const Welcome = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  console.log(Auth.getUser().data.username);

  return (
    <div>
      {Auth.loggedIn() ? (
        <h1>
          Hello
          {Auth.getUser().data.username} you are logged in
        </h1>
      ) : (
        <h1>Not logged in</h1>
      )}


      
    </div>
  );
};

export default Welcome;
