import React, { useState } from "react";
import { useParams } from "react-router-dom";
import EditPlanButton from "./EditPlanButton";
import AddPlanButton from "./AddPlanButton";

export default function PlanForm({
  planId,
  category,
  name,
  location,
  notes,
  status,
}) {
  const { tripId } = useParams();
  console.log(tripId);

  const [formState, setFormState] = useState({
    tripId: tripId,
    category: category ? category : "",
    name: name ? name : "",
    location: location ? location : "",
    notes: notes ? notes : "",
    status: status ? status : false,
  });

  // Conditionally render the button depending if editing or adding a new plan
  let button;
  if (planId) {
    button = <EditPlanButton formState={formState} planId={planId} />;
    console.log(planId);
  } else {
    button = <AddPlanButton formState={formState} />;
    console.log("Add plan");
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

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
      <h3>New plan for somewhere to {formState.category}</h3>
      <form className="flex-row justify-center justify-space-between-md align-center">
        <div className="form-group pb-2">
          <label htmlFor="name">Plan Title</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="What's the plan?"
            onChange={handleChange}
            onFocus={resetValidation}
            onBlur={validation}
          />
          <div className="valid-feedback">Sounds Fun!</div>
          <div className="invalid-feedback">
            Hey! Get back here.. This field is required.
          </div>
        </div>

        <div className="form-group pb-2">
          <label htmlFor="name">Location</label>
          <input
            type="text"
            className="form-control"
            name="location"
            placeholder="Location"
            value={formState.location}
            onChange={handleChange}
            onFocus={resetValidation}
            onBlur={validation}
          />
          <div className="valid-feedback">Oh how lovely!</div>
          <div className="invalid-feedback">Tell me more..</div>
        </div>

        <div className="form-group pb-2">
          <label htmlFor="name">Notes</label>
          <textarea
            className="form-control"
            name="notes"
            placeholder="Notes"
            value={formState.notes}
            onChange={handleChange}
          ></textarea>
          <div className="valid-feedback">Excellent</div>
        </div>

        {button}
        {/* {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )} */}
      </form>
    </div>
  );
}
