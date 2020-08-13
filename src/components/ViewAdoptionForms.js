import React, { useState, useEffect } from 'react'
import AdoptionForm from './AdoptionForm'

const ApprovalForm = props => {
    const [newApproval, setNewApproval] = useState("")
    const [allAdoptionForms, setAllAdoptionForms] = useState([])

    const handleApprovalChange = event => {
        setNewApproval(event.currentTarget.value)
    }

    const handleApprovalSubmit = event => {
        event.preventDefault()
        //fetch request goes here: 
        fetch("/api/v1/adoption_application_approval", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        })
    };

    useEffect(() => {
        fetch("/api/v1/adoption_application").then((response) => response.json())
            .then((adoptionForms) => {
                setAllAdoptionForms(adoptionForms.rows)
            })
    }
        , [])

        let allForms = allAdoptionForms.map(AdoptionForm => {
            return <option value="">--{`${AdoptionForm.name}, Application#${AdoptionForm.id}, ${AdoptionForm.application_status}`}--</option>
        })
    return (
        <form >
            <label for="completedForms">Select a form to reveiw:</label>
            <select name="completedForms" id="completedForms">
                <option value="">--Please choose an option--</option>
                {allForms}
            </select>


            <label for="approval">Choose Approval Status:</label>
            <select onChange={handleApprovalChange} value={newApproval} name="approval" id="approval">
                <option value="">--Please choose an option--</option>
                <option value="Approve">Approve</option>
                <option value="Deny">Deny</option>
            </select>

            <input type="submit" value="Submit" />
        </form >)
}