import React, { useState } from "react";
import Modal from "react-modal";

import AddFactForm from "./AddActForm";

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

const AddFact = () => {
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
    <div className="d-grid">
      <button
        type="button"
        className="btn btn-outline-secondary btn-lg"
        onClick={openModal}
      >
        Add New
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add Trip"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add a new fact</h2>
        <AddFactForm />
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
};

export default AddFact;
