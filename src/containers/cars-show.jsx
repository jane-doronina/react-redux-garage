import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { useNavigate } from "react-router-dom";

import SidePanel from '../components/side-panel';
import SquareLogo from "../assets/images/logo_square.svg";
import "../assets/stylesheets/cars-show.scss";
import { deleteCar } from '../actions';

const CarsShow = (props) => {
  const { id } = useParams();
  const car = props.cars.find((car) => car.id === Number(id));

  const navigate = useNavigate();

  const handleDelete = () => {
    props.deleteCar(id);
    navigate("/");
  }

  return(
    <div className="cars-show">
      <SidePanel garage={props.garage} path="/" text="Back to list" />
      {!car ? <p>Loading...</p> :
      <div className="cars-show-card">
        <img src={SquareLogo} alt="Logo"></img>
        <div className='cars-show-card-info'>
          <h2>{car.brand} - {car.model}</h2>
          <p><strong>Owner:</strong> {car.owner}</p>
          <p className="plate">{car.plate}</p>
          <button class="delete btn btn-danger" onClick={handleDelete}>Delete</button>
        </div>
      </div>
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cars: state.cars,
    garage: state.garage
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {deleteCar: deleteCar},
    dispatch
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
