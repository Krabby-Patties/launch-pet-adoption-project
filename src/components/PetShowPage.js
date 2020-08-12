import React, { useEffect, useState } from 'react';
import AdoptionForm from "./AdoptionForm"

const PetShowPage = (props) => {
  const speciesId = props.match.params.species
  const adoptablePetId = props.match.params.id

  const [adoptablePet, setAdoptablePet] = useState({})
  const [isAdopting, setIsAdopting] = useState(false)
  const [animalPageFound, setAnimalPageFound] = useState(true)

  useEffect(() => {
    fetch(`/api/v1/show_page?type=${speciesId}&id=${adoptablePetId}`)
      .then(response => {
        if (response.ok) {
          return response
        } else {
          setAnimalPageFound(false)
        }
      })
      .then(response => response.json())
      .then(adoptablePet => setAdoptablePet(adoptablePet.rows[0]))
      .catch(error => {
        console.log(error)
      })
  }, [])

  const handleButtonClick = event => {
    event.preventDefault()
    setIsAdopting(true)
  }
  const animalInformation = (
    <div>
      <img src={adoptablePet.img_url} alt={`Photo of ${adoptablePet.name}`} />
      <p>Name {adoptablePet.name}</p>
      <p>Age {adoptablePet.age}</p>
      <p>Vaccination Status {adoptablePet.vaccination_status}</p>
      <p>Adopt me: {adoptablePet.adoption_story}</p>
    </div>
  )

  let form = ""
  let submitButton = (
    <form onSubmit={handleButtonClick}>
      <input className="button" type="submit" value="Adopt Me!" />
    </form>
  )

  if (isAdopting) {
    form = AdoptionForm
    submitButton = ""
  }

  let error
  if (!animalPageFound) {
    error = "404 Error.  Animal is not Found."
    submitButton = ""
    animalInformation = ""
    form = ""
  }

  return (
    <>
      {error}
      {animalInformation}
      {submitButton}
      {form}
    </>
  )
}

export default PetShowPage
