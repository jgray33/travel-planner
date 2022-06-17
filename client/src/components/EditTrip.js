import React, { useState } from "react";
import Modal from "react-modal";
import TripForm from "./TripForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const EditTrip = ({
  tripId,
  tripName,
  description,
  location,
  startDate,
  endDate,
}) => {
  let subtitle;

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <span className="mx-2">
      <FontAwesomeIcon
        icon={faPencil}
        type="button"
        className="btn btn-outline-dark"
        onClick={openModal}
      />

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Edit trip"
        style={customStyles}
      >
        <h4 className="fs-4">Edit trip</h4>
        <TripForm
          tripId={tripId}
          tripName={tripName}
          description={description}
          location={location}
          startDate={startDate}
          endDate={endDate}
        />
        <button className="btn btn-outline-danger" onClick={closeModal}>
          Cancel
        </button>
      </Modal>
    </span>
  );
};

export default EditTrip;
