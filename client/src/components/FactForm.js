import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_FACT } from "../utils/mutations";

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

      const [addFact, {error}] = useMutation(ADD_FACT)

      const handleFormSubmit = async (event) => {
        try {
          const { data } = addFact({
            variables: { tripId, ...formState },
          });
        } catch (err) {
          console.log(err);
          
        }
      };

  return (
    <div>
      <h1> Here is the form</h1>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
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
          <button className="btn btn-primary btn-block py-3" type="submit">
            Add Fact
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
}
