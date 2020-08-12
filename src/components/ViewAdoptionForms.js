import React, { useState, useEffect } from 'react'

const ApprovalForm = props => {
    const [newApproval, setNewApproval] = useState("")

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
        }})
};

useEffect(() => {
    fetch("/api/v1/adoption_application").then((response) => response.json())
    .then((adoptionForms) => {
    
    })
}
,[])

return(
<form >
    <label for="approval">Choose Approval Status:</label>

    <select onChange={handleApprovalChange} value={newApproval} name="approval" id="approval">
        <option value="">--Please choose an option--</option>
        <option value="Approve">Approve</option>
        <option value="Deny">Deny</option>
    </select>

    <input type="submit" value="Submit" />
</form >)}