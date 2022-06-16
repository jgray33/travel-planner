import React, { useState } from "react";
import Modal from "react-modal";
import TripForm from "./TripForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

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

  return(
    <div>
    <FontAwesomeIcon
      icon={faPencil}
      type="button"
      className="btn btn-outline-secondary"
      onClick={openModal}
    />

    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      contentLabel="Edit trip"
    >
      <TripForm
        tripId={tripId}
       tripName={tripName}
       description={description}
       location={location}
       startDate={startDate}
       endDate={endDate}
      />
      <button className="btn btn-outline-secondary" onClick={closeModal}>
        close
      </button>
    </Modal>
  </div>
  )
};

export default EditTrip