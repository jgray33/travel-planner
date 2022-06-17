import React, { useState } from "react";
import Auth from "../utils/auth";
import AddTripButton from "./AddTripButton";
import EditTripButton from "./EditTripButton";
import CityAutoComp from "./CityAutoComp";

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

  console.log(formState.location)
  console.log(formState.description)

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
    <div className="mx-3">
      <form className="m-3">
        <div className="mb-2">
          <label htmlFor="tripName" className="form-label">
            Trip Name
          </label>
          <input
            id="tripName"
            name="tripName"
            placeholder="Trip name"
            value={formState.tripName}
            className="form-input w-100"
            onChange={handleChange}
            type="text"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="tripDesc" className="form-label">
            Description
          </label>
          <textarea
            id="tripDesc"
            name="description"
            placeholder="What's the occasion?"
            value={formState.description}
            className="form-input w-100"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-2">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          {/* <input
            id="location"
            name="location"
            type="text"
            placeholder="Where are you going?"
            value={formState.location}
            className="form-input w-100"
            onChange={handleChange}
          /> */}
          <CityAutoComp onChange={handleChange} value={formState.location} />
        </div>
        <div className="mb-2">
          <label htmlFor="startDate" className="form-label">
            Start Date
          </label>
          <input
            id="startDate"
            type="date"
            name="startDate"
            value={formState.startDate}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="endDate" className="form-label">
            End Date
          </label>
          <input
            id="endDate"
            type="date"
            name="endDate"
            value={formState.endDate}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>
        <div>{button}</div>
      </form>
    </div>
  );
};

export default TripForm;
