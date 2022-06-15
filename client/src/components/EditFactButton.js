import React from 'react'
import { useMutation } from '@apollo/client'
import { UPDATE_FACT } from '../utils/mutations'

const EditFactButton = ({formState, factId}) => {
    const [editFact, {error}] = useMutation(UPDATE_FACT)

    const handleFormSubmit = async (event) => {
        try {
            const {data} = editFact({
                variables: {
                    factId: factId,
                    description: formState.description
                }
            })
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <button
        className="btn btn-primary btn-block py-3"
        onClick={handleFormSubmit}
      >
        Update
      </button>
    )
}

export default EditFactButton