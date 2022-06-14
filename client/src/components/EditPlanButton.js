import React from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_PLAN } from "../utils/mutations";

const EditPlanButton = ({ formState, planId }) => {
  const [editPlan, { error }] = useMutation(UPDATE_PLAN);

  const handleFormSubmit = async (event) => {
    try {
      const { data } = editPlan({
        variables: {
          planId: planId,
          category: formState.category,
          name: formState.name,
          location: formState.location,
          notes: formState.notes,
          status: formState.status,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button
      className="btn btn-outline-secondary btn-block py-3"
      onClick={handleFormSubmit}
    >
      Update
    </button>
  );
};

export default EditPlanButton;
