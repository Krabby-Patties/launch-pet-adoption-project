import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import AvailablePetsIndex from "./AvailablePetsIndex"
import NewPetForm from "./NewPetForm"
import PetTypesIndex from "./PetTypesIndex"
import PetShowPage from "./PetShowPage"
import ViewAdoptionForms from "./ViewAdoptionForms"
import AdoptedPetsIndex from "./AdoptedPetsIndex"
import ViewSurrenderForm from "./ViewSurrenderForm"
const Navbar = props => {
  return (
    <>
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-text">
              Pet Adoption
            </li>

            <li>
              <div className="navbar">
                <Link to="/pets">Home</Link>
              </div>
            </li>

            <li>
              <div className="navbar">
                <Link to="/pets/1">Two Legged Pets</Link>
              </div>
            </li>

            <li>
              <div className="navbar">
                <Link to="/pets/2">Four Legged Pets</Link>
              </div>
            </li>

            <li>
              <div className="navbar">
                <Link to="/pets/adopted/">View Adopted Pets</Link>
              </div>
            </li>
            
            <li>
              <div className="navbar">
                <Link to="/adoptions/new">Put a Pet Up For Adoption</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <Switch>
        <Route exact path="/pets" component={PetTypesIndex} />
        <Route exact path="/pets/adopted/" component={AdoptedPetsIndex} />
        <Route exact path="/adoptions/new" component={NewPetForm} />
        <Route exact path="/pets/:species" component={AvailablePetsIndex} />
        <Route exact path="/pets/:species/:id" component={PetShowPage} />
        <Route exact path="/admin/review/adoption" component={ViewAdoptionForms} />
        <Route exact path="/admin/review/surrender" component={ViewSurrenderForm} />
      </Switch>
    </>
  );
};
export default Navbar;
