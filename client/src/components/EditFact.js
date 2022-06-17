import React, { useState } from "react";
import Modal from "react-modal";
import FactForm from "./FactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

Modal.setAppElement("#root");

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
      <FontAwesomeIcon
        icon={faPencil}
        type="button"
        onClick={openModal}
        className="btn"
      />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Edit fact"
        style={customStyles}
      >
        <FactForm factId={factId} description={description} />
        <button className="btn btn-outline-danger my-3" onClick={closeModal}>
          close
        </button>
      </Modal>
    </div>
  );
};

export default EditFact;
