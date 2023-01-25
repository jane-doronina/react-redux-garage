import React from 'react';
import '../assets/stylesheets/cars-index.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCars } from '../actions';
// import { Link } from 'react-router-dom';

import SidePanel from '../components/side-panel';
import CarCard from '../components/car-card';

class CarsIndex extends React.Component {

  componentDidMount() {
    this.props.fetchCars(this.props.garage);
  }

  componentDidUpdate() {
    this.props.fetchCars(this.props.garage);
  }

  render() {
    if (this.props.cars.length === 0) {
      return(
        <div className="cars-index">
          <SidePanel garage={this.props.garage} path="/cars/new" text="Add a car" />
          <div className="cars-list">
            <p class="no-car">No cars added yet.</p>
          </div>
        </div>
      );
    } else {
    return(
    <div className="cars-index">
      <SidePanel garage={this.props.garage} path="/cars/new" text="Add a car" />
      <div className='cars-list'>
        {this.props.cars.map((car) => {
          return <CarCard key={car.id} car={car} />
        })}
      </div>
    </div>);
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchCars: fetchCars
    }, dispatch
  );
}

const mapStateToProps = (state) => {
  return {
    cars: state.cars,
    garage: state.garage
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
