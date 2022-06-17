import React, { useState } from "react";
import Modal from "react-modal";
import PlanForm from "./PlanForm";

Modal.setAppElement("#root");

const AddVisit = ({ category }) => {
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

  console.log(category);

  return (
    <div className="d-grid">
      <button
        type="button"
        className="btn-lg grey-button"
        onClick={openModal}
      >
        Add New
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Add visit"
      >
        <PlanForm category={category} />
        <button
          type="button"
          className="btn btn-outline-danger my-2"
          onClick={closeModal}
        >
          close
        </button>
      </Modal>
    </div>
  );
};

export default AddVisit;
