import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import AvailablePetsIndex from "./AvailablePetsIndex"
import AdoptionForm from "./AdoptionForm"
import NewPetForm from "./NewPetForm"
import PetTypesIndex from "./PetTypesIndex"

const Navbar = props => {
  return (
    <>
      <div className="navbar">
        <Link to="/">Home</Link>
      </div>
      <div className="navbar">
        <Link to="/pet_types">Pet Types</Link>
      </div>
      <div className="navbar">
        <Link to="/adoption_form">I Want to Adopt</Link>
      </div>
      <div className="content">
        <h1 className="page-title">Pet Adoption</h1>
      </div>

      <Switch>
        <Route exact path="/pets" component={PetTypesIndex} />
        <Route exact path="/pets/new" component={AdoptionForm} />
        <Route exact path="/adoptions/new" component={NewPetForm} />
        <Route exact path="/pets/:species" component={AvailablePetsIndex} />
      </Switch>
    </>
  );
};

export default Navbar;
