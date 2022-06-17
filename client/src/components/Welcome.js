import React from "react";

import Auth from "../utils/auth";

const Welcome = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <h3 className="display-6">
          {Auth.getUser().data.username.toUpperCase()} you are logged in
        </h3>
      ) : (
        <h3 className="display-6">Not logged in</h3>
      )}
    </div>
  );
};

export default Welcome;
