import React, { useState } from "react";
import Modal from "react-modal";
import PlanForm from "./PlanForm"

Modal.setAppElement("#root");

const AddVisit = () => {
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
      <h1> Visit</h1>
      <button type="button" onClick={openModal}>
        {" "}
        Add place to visit{" "}
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Add visit"
      >
        <PlanForm />
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
};

export default AddVisit;
