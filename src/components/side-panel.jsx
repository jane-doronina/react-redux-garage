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
        <h1>{props.garage}</h1>
        <p>Our garage is the best. Reasonable prices, always on time, we are the best (and fictional).</p>
        <Link to={props.path} className="w-100 btn btn-lg btn-outline-dark">{props.text}</Link>
      </div>
    </div>
  )
}

export default SidePanel;
