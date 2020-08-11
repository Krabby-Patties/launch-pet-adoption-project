import React, { useState } from 'react'

const AdoptionForm = props => {
  const [newApplication, setNewApplication] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    homeStatus: "default"
  })

  const handleAppChange = event => {
    setNewApplication({
      ...newApplication,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleAppSubmit = event => {
    event.preventDefault()
    let payload = {
      name: newApplication.name,
      phoneNumber: newApplication.phoneNumber,
      email: newApplication.email,
      homeStatus: newApplication.homeStatus
    }

    setNewApplication({
      name: "",
      phoneNumber: "",
      email: "",
      homeStatus: ""
    })
  }

  return (
    <form onSubmit={handleAppSubmit}>
      <label htmlFor="name">Your Name:
        <input type="text" name="name" id="name" onChange={handleAppChange} value={newApplication.name} />
      </label>
      <label htmlFor="phoneNumber">Phone Number:
        <input type="text" name="phoneNumber" id="phoneNumber" onChange={handleAppChange} value={newApplication.phoneNumber} />
      </label>
      <label htmlFor="email">Email Address:
        <input type="text" name="email" id="email" onChange={handleAppChange} value={newApplication.email} />
      </label>
      <label htmlFor="homeStatus">Select Home Status</label>
      <select name="homeStatus" id="homeStatus" onChange={handleAppChange} value={newApplication.homeStatus}>
        <option value="default" disabled hidden>Select Home Status</option>
        <option value="own">Own</option>
        <option value="rent">Rent</option>
      </select>
      <div>
        <input className="button" type="submit" value="Submit" />
      </div>
    </form>
  )
}

export default AdoptionForm