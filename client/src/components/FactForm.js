import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AddFactButton from "./AddFactButton";
import EditFactButton from "./EditFactButton";


export default function FactForm({description, factId}) {
  const { tripId } = useParams();
  console.log("Here is the trip ID from the add fact form ", tripId);

  const  [formState, setFormState] = useState({
    tripId: tripId,
    description: description? description : "",
      })

      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState((prevState) => {
          return {
            [name]: value,
          };
        });
      };

  // Conditionally render the button depending if editing or adding a new plan
  let button
  if(factId) {
    button = <EditFactButton formState={formState} factId={factId} />; 
  console.log("FactId from button", factId)}
      else {
        button = <AddFactButton formState={formState} tripId={tripId}/>
        console.log("Add plan")
      }
     

  return (
    <div>
      <h1> Here is the form</h1>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
              >
        <div className="col-12">
          <textarea
            name="description"
            placeholder="Fact?"
            value={formState.description}
            className="form-input w-100"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12 col-lg-3">
          {button}
        </div>
        </form>
    </div>
  );
}
