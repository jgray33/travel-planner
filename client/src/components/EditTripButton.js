import React from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_TRIP } from "../utils/mutations";

const EditTripButton = ({ formState, tripId }) => {
  const [editTrip, { error }] = useMutation(UPDATE_TRIP);
  console.log("Here is the trip ID from edit trip button ", tripId);
  console.log(
    "Here is all the rest:",
    formState.tripName,
    formState.description,
    formState.location,
    formState.startDate,
    formState.endDate
  );

  const handleFormSubmit = async (event) => {
    try {
      const { data } = editTrip({
        variables: {
          tripId: tripId,
          tripName: formState.tripName,
          description: formState.description,
          location: formState.location,
          startDate: formState.startDate,
          endDate: formState.endDate,
        },
      });
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
        Update trip
      </button>
    </div>
  );
};

export default EditTripButton;
