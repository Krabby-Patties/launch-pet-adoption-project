import React, { useState } from 'react'

const NewPetForm = props => {
  const [newPet, setNewPet] = useState({
    name:"", 
    phoneNumber:"",
    email:"",
    petName:"",
    petAge:"",
    petType:"",
    petImage:"",
    vaccinationStatus:""
  })
  const handlePetChange = event => {
    setNewPet({
      ...newPet,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }
  const handlePetSubmit = event => {
    event.preventDefault()
    let payload = {
      name: newPet.name,
      phoneNumber: newPet.phoneNumber,
      email: newPet.email,
      petName: newPet.petName,
      petAge: newPet.petAge,
      petType: newPet.petType,
      petImage: newPet.petImage,
      vaccinationStatus: newPet.vaccinationStatus
    }
    props._________(payload)
    setNewPet({
      name:"", 
      phoneNumber:"",
      email:"",
      petName:"",
      petAge:"",
      petType:"",
      petImage:"",
      vaccinationStatus:""
    })
    
  }
  return(
    <form onSubmit={handlePetSubmit}>
      <label htmlFor="name">Your Name:
        <input type="text" name="name" id="name" onChange={handlePetChange} value={newPet.name} />
      </label>
      <label htmlFor="phoneNumber">Phone Number:
        <input type="text" name="phoneNumber" id="phoneNumber" onChange={handlePetChange} value={newPet.phoneNumber} />
      </label>
      <label htmlFor="email">Email Address:
        <input type="text" name="email" id="email" onChange={handlePetChange} value={newPet.email} />
      </label>
      <label htmlFor="petName">Pet Name:
        <input type="text" name="petName" id="petName" onChange={handlePetChange} value={newPet.petName} />
      </label>
      <label htmlFor="petAge">Pet Age:
        <input type="text" name="petAge" id="petAge" onChange={handlePetChange} value={newPet.petAge} />
      </label>
      <label htmlFor="petType">Select Pet Type</label>
      <select name="petType" id="petType" onChange={handlePetChange} value={newPet.petType}>
        <option value="fourLegged">Four-Legged</option>
        <option value="twoLegged">Two-Legged</option>
      </select>
      <label htmlFor="image">Image of {newPet.petName}:
        <input src={newPet.image} alt="image of pet" />
      </label>  
        <label htmlFor="vaccinationStatus">Vaccination Status:
        <input type="text" name="vaccinationStatus" id="vaccinationStatus" onChange={handlePetChange} value={newPet.vaccinationStatus} />
      </label>  
      <div>
        <button className="button">Submit</button>
        <input className="button" type="submit" value="Submit" />
      </div>
    </form>
  )
}

export default NewPetForm