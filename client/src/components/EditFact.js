import React, { useState } from "react";
import Modal from "react-modal";
import FactForm from "./FactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

Modal.setAppElement("#root");

const EditFact = ({ factId, description }) => {
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
    <div>
      <FontAwesomeIcon icon={faPencil} type="button" onClick={openModal} />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Edit fact"
      >
        <FactForm factId={factId} description={description} />
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
};

export default EditFact;
