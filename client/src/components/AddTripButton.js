import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_TRIP } from "../utils/mutations";

const AddTripButton = ({ formState }) => {
  const [addTrip, { error }] = useMutation(ADD_TRIP);

  const handleFormSubmit = async (event) => {
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
    <div className="d-grid">
      <button
        className="btn btn-outline-dark btn-block py-3"
        onClick={handleFormSubmit}
      >
        Add trip
      </button>
    </div>
  );
};

export default AddTripButton;
