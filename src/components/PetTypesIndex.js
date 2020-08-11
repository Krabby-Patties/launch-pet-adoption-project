import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PetTypesIndex = props => {
  const petTypesDisplay = [];
  useEffect(() => {
    fetch('/api/v1/pet_types')
      .then((response) => response.json())
      .then((petTypes) => {
        petTypesDisplay = petTypes.map((petType) => {
          return (
            <div>
              <Link to={`/pets/${petType.type}`}><img src={petType.img_url_random_animal} /></Link>
              <Link to={`/pets/${petType.type}`}>{petType.type}</Link>
            </div>
          )
        });
      })
  }, []);

  return (
    <>
      <h1>Adopt a pet!</h1>
      <p>Here are the pet types we have available:</p>
      {petTypesDisplay}
    </>
  );
};

export default PetTypesIndex;
