import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="form-signup-login form-signup w-100 m-auto">
      {data ? (
        <p>
          Success! You may now head <Link to="/">back to the homepage.</Link>
        </p>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <h2 className="h3 mb-3 fw-normal">Please sign in</h2>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={formState.name}
              onChange={handleChange}
            />
            <label htmlFor="username">Username</label>
          </div>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
            <label htmlFor="email">Email address</label>
          </div>

          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formState.password}
              onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
          </div>
          <button
            className="w-100 btn btn-lg btn-outline-secondary"
            type="submit"
          >
            Submit
          </button>
        </form>
      )}

      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
};

export default Signup;
