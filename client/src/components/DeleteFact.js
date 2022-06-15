import React from 'react'
import { useMutation } from '@apollo/client'

import { DELETE_FACT } from '../utils/mutations'

const DeleteFact = ({tripId, factId}) => {
    const [deleteFact, {error}] = useMutation(DELETE_FACT)

    const handleDelete = async (tripId, factId) => {
        try {
            const {data} = await deleteFact({
                variables: {tripId, factId}
            })
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <button onClick={() => handleDelete(tripId, factId)}>
        Delete
    </button>
    )
}

export default DeleteFact