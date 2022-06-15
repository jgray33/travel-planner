import React from "react"
import { useMutation } from "@apollo/client"

import {DELETE_PLAN} from "../utils/mutations"

const DeletePlan = ({tripId, planId}) => {
const [deletePlan, {error}] = useMutation(DELETE_PLAN)

console.log("Trip ID from delete plan", tripId)
console.log("Plan ID from delete plan ", planId)

const handleDelete = async (tripId, planId) => {
    console.log("THIS ACTUAL PLAN   ", planId)
    console.log("THIS ACTUAL TRIP ", tripId)
    try {
        const {data} = await deletePlan({
            variables: {tripId, planId}
        })
    } catch (err) {
        console.log(err)
    }
} 


return(
    <button onClick={() => handleDelete(tripId, planId)}>
        Delete
    </button>
)

}

export default DeletePlan