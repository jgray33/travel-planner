import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_TRIP } from "../utils/mutations";

import Auth from "../utils/auth";
const userId = Auth.getUser()?.data?._id;

const AddTripForm = () => {
  const [formState, setFormState] = useState({
    tripName: "",
    description: "",
    location: "",
    startDate: "",
    endDate: "",
    userId: userId,
  });
  console.log(userId);
  const [addTrip, { error }] = useMutation(ADD_TRIP);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = addTrip({
        variables: { ...formState },
      });
      // window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Here is the form</h1>

      <form
        className="container-fluid d-flex flex-column justify-content-center justify-content-between-md align-center bg-light p-0"
        onSubmit={handleFormSubmit}
      >
        <textarea
          name="tripName"
          placeholder="Trip name"
          value={formState.tripName}
          className="form-input w-100"
          onChange={handleChange}
        ></textarea>
        <input
          name="description"
          placeholder="What's the occasion?"
          value={formState.description}
          className="form-input w-100"
          onChange={handleChange}
        />
        <input
          name="location"
          placeholder="Where are you going?"
          value={formState.location}
          className="form-input w-100"
          onChange={handleChange}
        />
        <input
          name="startDate"
          placeholder="When are you going?"
          value={formState.startDate}
          className="form-input w-100"
          onChange={handleChange}
        />
        <input
          name="endDate"
          placeholder="Until what date?"
          value={formState.endDate}
          className="form-input w-100"
          onChange={handleChange}
        />
        <button
          className="btn btn-primary my-3 text-nowrap container-fluid "
          type="submit"
        >
          Add trip
        </button>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default AddTripForm;
