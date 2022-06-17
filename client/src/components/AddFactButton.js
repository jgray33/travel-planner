import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_FACT } from "../utils/mutations";

const AddFactButton = ({ tripId, formState }) => {
  const [addFact, { error }] = useMutation(ADD_FACT);

  const handleFormSubmit = async (event) => {
    try {
      const { data } = addFact({
        variables: { tripId, ...formState },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="d-grid">
      <button
        className="btn btn-outline-secondary py-3"
        onClick={handleFormSubmit}
      >
        Add fact
      </button>
    </div>
  );
};

export default AddFactButton;
