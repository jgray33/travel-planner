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

  const resetValidation = (e) => {
    e.target.classList.remove("is-invalid");
    e.target.classList.remove("is-valid");
  };

  const validation = (e) => {
    if (e.target.value === "") {
      e.target.classList.add("is-invalid");
    } else {
      e.target.classList.add("is-valid");
    }
  };

  return (
    <div>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12">
          <textarea
            name="tripName"
            placeholder="Trip name"
            value={formState.tripName}
            className="form-input w-100"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="description"
            placeholder="What's the occasion?"
            value={formState.description}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="location"
            placeholder="Where are you going?"
            value={formState.location}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="startDate"
            placeholder="When are you going?"
            value={formState.startDate}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="endDate"
            placeholder="Until what date?"
            value={formState.endDate}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-primary btn-block py-3" type="submit">
            Add trip
          </button>
        </div>
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
