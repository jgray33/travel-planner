import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_FACT } from "../utils/mutations";
import { useParams } from "react-router-dom";

export default function AddFactForm() {
  const { tripId } = useParams();
  console.log(tripId);

  const [fact, setFact] = useState("");

  const [addFact, { error }] = useMutation(ADD_FACT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = addFact({
        variables: { tripId, fact },
      });

      setFact("");
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
            value={fact}
            className="form-input w-100"
            onChange={(event) => setFact(event.target.value)}
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
