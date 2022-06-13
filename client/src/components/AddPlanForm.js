import React, { useState } from "react";
import { useParams } from "react-router-dom";
import EditPlanButton from "./EditPlanButton";
import AddPlanButton from "./AddPlanButton";

export default function AddPlanForm({
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
let button
if(planId) {
  button = <EditPlanButton formState={formState} planId={planId} />; 
console.log(planId)}
    else {
      button = <AddPlanButton formState={formState}/>
      console.log("Add plan")
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
  
  

  return (
    <div>
      <h1> Here is the form</h1>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        
      >
        <div className="col-12">
          <textarea
            name="category"
            placeholder="Eat, Visit or Activity?"
            value={formState.category}
            className="form-input w-100"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12">
          <textarea
            name="name"
            placeholder="What's the plan?"
            value={formState.name}
            className="form-input w-100"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12">
          <textarea
            name="location"
            placeholder="Location"
            value={formState.location}
            className="form-input w-100"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12">
          <textarea
            name="notes"
            placeholder="Notes"
            value={formState.notes}
            className="form-input w-100"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12 col-lg-3">
          {button}
        </div>
        {/* {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )} */}
      </form>
      </div>
  );
}
