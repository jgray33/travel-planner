import React from "react";
import { useMutation } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { DELETE_FACT } from "../utils/mutations";

const DeleteFact = ({ tripId, factId }) => {
  const [deleteFact, { error }] = useMutation(DELETE_FACT);

  const handleDelete = async (tripId, factId) => {
    try {
      const { data } = await deleteFact({
        variables: { tripId, factId },
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <span className="mx-2">
    <FontAwesomeIcon
      icon={faTrashCan}
      onClick={() => handleDelete(tripId, factId)}
    />
    </span>
  );
};

export default DeleteFact;
