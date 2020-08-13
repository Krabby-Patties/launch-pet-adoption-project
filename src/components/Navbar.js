import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import AvailablePetsIndex from "./AvailablePetsIndex"
import NewPetForm from "./NewPetForm"
import PetTypesIndex from "./PetTypesIndex"
import PetShowPage from "./PetShowPage"
import ViewAdoptionForms from "./ViewAdoptionForms"

const Navbar = props => {
  return (
    <>
      <div className="navbar">
        <Link to="/pets">Home</Link>
      </div>
      <div className="navbar">
        <Link to="/pets/1">Two Legged Pets</Link>
      </div>
      <div className="navbar">
        <Link to="/pets/2">Four Legged Pets</Link>
      </div>
      <div className="navbar">
        <Link to="/adoptions/new">Put a Pet Up For Adoption</Link>
      </div>
      <div className="content">
        <h1 className="page-title">Pet Adoption</h1>
      </div>

      <Switch>
        <Route exact path="/pets" component={PetTypesIndex} />
        <Route exact path="/adoptions/new" component={NewPetForm} />
        <Route exact path="/pets/:species" component={AvailablePetsIndex} />
        <Route exact path="/pets/:species/:id" component={PetShowPage} />
        <Route exact path="/admin/review/adoption" component={ViewAdoptionForms} />
      </Switch>
    </>
  );
};

export default Navbar;
