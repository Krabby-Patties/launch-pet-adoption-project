import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import AvailablePetsIndex from "./AvailablePetsIndex"
import NewPetForm from "./NewPetForm"
import PetTypesIndex from "./PetTypesIndex"
import PetShowPage from "./PetShowPage"
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
                <Link to="/adoptions/new">Put a Pet Up For Adoption</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Switch>
        <Route exact path="/pets" component={PetTypesIndex} />
        <Route exact path="/adoptions/new" component={NewPetForm} />
        <Route exact path="/pets/:species" component={AvailablePetsIndex} />
        <Route exact path="/pets/:species/:id" component={PetShowPage} />
      </Switch>
    </>
  );
};
export default Navbar;
