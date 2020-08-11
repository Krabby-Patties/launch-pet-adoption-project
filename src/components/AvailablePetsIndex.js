import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AvailablePetsIndex = props => {
  const [availablePetsDisplay, setAvailablePetsDisplay] = useState([]);
  const species = props.match.params.species;

  useEffect(() => {
    fetch(`/api/v1/adoptable_pets?type=${species}`)
      .then((response) => response.json())
      .then((availablePets) => {
        setAvailablePetsDisplay(availablePets.rows.map((pet) => {
          return (
            <tr key={pet.id}>
              <td><img src={pet.img_url} alt={`Photo of ${pet.name}`} /></td>
              <td><Link to={`/pets/${species}/${pet.id}`}>{pet.name}</Link></td>
              <td>{pet.age}</td>
              <td>{pet.vaccination_status ? 'Yes' : 'No'}</td>
            </tr>
          )
        }));
      });
  }, []);

  return (
    <>
      <h1>{species}</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Age</th>
            <th>Vaccination Status</th>
          </tr>
        </thead>
        <tbody>
          {availablePetsDisplay}
        </tbody>
      </table>
    </>
  );
};

export default AvailablePetsIndex;
