import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_PLAN } from "../utils/mutations";

const AddPlanButton = ({ formState }) => {
  const [addPlan, { error }] = useMutation(ADD_PLAN);
  console.log(formState);

  const handleFormSubmit = async (event) => {
    try {
      const { data } = addPlan({
        variables: { ...formState },
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
        Add plan
      </button>
    </div>
  );
};

export default AddPlanButton;
