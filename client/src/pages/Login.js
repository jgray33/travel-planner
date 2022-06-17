import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import validator from "validator";

import "../style/signup-login.css";

import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  const resetValidation = (e) => {
    e.target.classList.remove("is-invalid");
    e.target.classList.remove("is-valid");
  };

  const validation = (e) => {
    if (e.target.type === "email") {
      if (validator.isEmail(e.target.value)) {
        e.target.classList.add("is-valid");
      } else {
        e.target.classList.add("is-invalid");
      }
    } else if (e.target.type === "password") {
      if (e.target.value.length >= 5) {
        e.target.classList.add("is-valid");
      } else {
        e.target.classList.add("is-invalid");
      }
    } else if (e.target.value === "") {
      e.target.classList.add("is-invalid");
    } else {
      e.target.classList.add("is-valid");
    }
  };

  return (
    <div className="mt-3">
      <div className="form-signup-login form-login w-100 m-auto">
        {data ? (
          <p>
            Success! You may now head <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <h2 className="h3 mb-3 fw-normal">Please login</h2>

            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                onFocus={resetValidation}
                onBlur={validation}
              />
              <div className="invalid-feedback m-2">Invalid email address</div>
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
                onFocus={resetValidation}
                onBlur={validation}
              />
              <div className="invalid-feedback m-2">
                Password must be at least 5 characters
              </div>
              <label htmlFor="password">Password</label>
            </div>
            <button className="w-100 btn btn-lg btn-outline-dark" type="submit">
              Submit
            </button>
            <div className="text-center mt-3">
              <Link to="/signup">Create an account</Link>
            </div>
          </form>
        )}

        {error && (
          <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
        )}
      </div>
    </div>
  );
};

export default Login;
