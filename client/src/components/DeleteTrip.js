import React from "react";
import { useMutation } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { DELETE_TRIP } from "../utils/mutations";

const DeleteTrip = ({ tripId }) => {
  const [deleteTrip, { error }] = useMutation(DELETE_TRIP);
  console.log(tripId);

  const handleDelete = async (tripId) => {
    try {
      const { data } = await deleteTrip({
        variables: { tripId },
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <span className="mx-2">
      <FontAwesomeIcon
        className="btn btn-outline-danger"
        icon={faTrashCan}
        onClick={() => handleDelete(tripId)}
      />
    </span>
  );
};

export default DeleteTrip;
