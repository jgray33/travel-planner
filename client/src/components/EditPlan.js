import React, { useState } from "react";
import Modal from "react-modal"
import PlanForm from "./PlanForm"


Modal.setAppElement("#root")

const EditPlan = ( {planId, category, name, location, notes, status} ) => {
    console.log(name)
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
         <button type="button" onClick={openModal}>
        Edit
      </button>
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Edit plan"
      >
        <PlanForm planId={planId} 
            category={category}
            name={name} 
            location={location}
            notes={notes}
            status={status} />
        <button onClick={closeModal}>close</button>
      </Modal>
      </div>

    )
}

export default EditPlan