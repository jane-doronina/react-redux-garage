// import React from 'react';
import mechanic from "../assets/images/mechanic.jpeg";
import logo from "../assets/images/logo.svg"
import { Link } from "react-router-dom";

const SidePanel = (props) => {
  return(
    <div className="side-panel">
      <img className="img-bg" src={mechanic} alt="Mechanic during work"></img>
      <img className="logo-red" src={logo} alt="#"></img>
      <div className="side-panel-info">
        <h1>Garage</h1>
        <p>Our garage is the best. Reasonable prices, always on time, we are the best (and fictional).</p>
        <Link to="/cars/new" className="w-100 btn btn-lg btn-outline-dark">Add a car</Link>
      </div>
    </div>
  )
}

export default SidePanel;
