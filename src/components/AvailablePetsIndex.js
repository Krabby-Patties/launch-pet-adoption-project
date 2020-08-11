import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const AvailablePetsIndex = props => {
  const { pet_type } = useParams()
  const availablePetsDisplay = [];
  useEffect(() => {
    fetch('/api/_')
      .then((response) => response.json())
      .then((availablePets) => {
        availablePetsDisplay = availablePets.map((pet) => {
          return (
            <tr>
              <td><img src={pet.img_url} /></td>
              <td><Link to={`/pets/${pet_type}/${pet.id}`}>{pet.name}</Link></td>
              <td>{pet.age}</td>
              <td>{pet.vaccination_status ? 'Yes' : 'No'}</td>
            </tr>
          )
        });
      })
  }, []);

  return (
    <>
      <h1>{pet_type}</h1>
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
          {petTypesDisplay}
        </tbody>
      </table>
    </>
  );
};

export default AvailablePetsIndex;
