import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PetTypesIndex = props => {
  const [petTypesDisplay, setPetTypesDisplay] = useState([]);
  useEffect(() => {
    fetch('/api/v1/pet_types')
      .then((response) => response.json())
      .then((petTypes) => {
        setPetTypesDisplay(petTypes.rows.map((petType) => {
          return (
            <div key={petType.id}>
              <Link to={`/pets/${petType.id}`}><img src={petType.img_url_random_animal} /></Link>
              <Link to={`/pets/${petType.id}`}>{petType.type}</Link>
              <p>{petType.description}</p>
            </div>
          )
        }));
      });
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
