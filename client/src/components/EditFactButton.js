import React from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_FACT } from "../utils/mutations";

const EditFactButton = ({ formState, factId }) => {
  const [editFact, { error }] = useMutation(UPDATE_FACT);

  const handleFormSubmit = async (event) => {
    try {
      const { data } = editFact({
        variables: {
          factId: factId,
          description: formState.description,
        },
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
        Update
      </button>
    </div>
  );
};

export default EditFactButton;
