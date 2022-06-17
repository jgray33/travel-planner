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
    <div>
      <button
        className="btn btn-secondary text-nowrap flex-row "
        onClick={handleFormSubmit}
      >
        Add fact
      </button>
    </div>
  );
};

export default AddFactButton;
