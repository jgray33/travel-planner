import React from "react";
import { useMutation } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { DELETE_PLAN } from "../utils/mutations";

const DeletePlan = ({ tripId, planId }) => {
  const [deletePlan, { error }] = useMutation(DELETE_PLAN);

  console.log("Trip ID from delete plan", tripId);
  console.log("Plan ID from delete plan ", planId);

  const handleDelete = async (tripId, planId) => {
    console.log("THIS ACTUAL PLAN   ", planId);
    console.log("THIS ACTUAL TRIP ", tripId);
    try {
      const { data } = await deletePlan({
        variables: { tripId, planId },
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FontAwesomeIcon
      icon={faTrashCan}
      onClick={() => handleDelete(tripId, planId)}
    />
  );
};

export default DeletePlan;
