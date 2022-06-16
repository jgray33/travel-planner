import React, { useState } from "react";
import AddTripButton from "./AddTripButton";
import EditTripButton from "./EditTripButton";

import Auth from "../utils/auth";
const userId = Auth.getUser()?.data?._id;

const TripForm = ({
  tripId,
  tripName,
  description,
  location,
  startDate,
  endDate,
}) => {
  const [formState, setFormState] = useState({
    tripName: tripName ? tripName : "",
    description: description ? description : "",
    location: location ? location : "",
    startDate: startDate ? startDate : "",
    endDate: endDate ? endDate : "",
    userId: userId,
  });

  let button;
  if (tripId) {
    button = <EditTripButton formState={formState} tripId={tripId} />;
  } else {
    button = <AddTripButton formState={formState} />;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
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
      <form className="flex-row justify-center justify-space-between-md align-center">
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

        <div className="col-12 col-lg-3">{button}</div>
      </form>
    </div>
  );
};

export default TripForm;
