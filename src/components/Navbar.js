import React from 'react';
import { Link } from 'react-router-dom';

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
    </>
  );
};

export default Navbar;
