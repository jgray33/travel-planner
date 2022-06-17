import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AddFactButton from "./AddFactButton";
import EditFactButton from "./EditFactButton";

export default function FactForm({ description, factId }) {
  const { tripId } = useParams();

  const [formState, setFormState] = useState({
    tripId: tripId,
    description: description ? description : "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => {
      return {
        [name]: value,
      };
    });
  };

  // Conditionally render the button depending if editing or adding a new plan
  let button;
  if (factId) {
    button = <EditFactButton formState={formState} factId={factId} />;
  } else {
    button = <AddFactButton formState={formState} tripId={tripId} />;
  }

  const resetValidation = (e) => {
    e.target.classList.remove("is-invalid");
    e.target.classList.remove("is-valid");
  };

  const validation = (e) => {
    if (e.target.value === "") {
      e.target.classList.add("is-invalid");
    } else {
      e.target.classList.add("is-valid");
    }
  };

  return (
    <div>
      <form>
        <textarea
          name="description"
          placeholder="Fact?"
          value={formState.description}
          className="form-control"
          onChange={handleChange}
          onFocus={resetValidation}
          onBlur={validation}
        ></textarea>
        <div className="invalid-feedback">Tell me something interesting!</div>
        <div className="mt-3">{button}</div>
      </form>
    </div>
  );
}
