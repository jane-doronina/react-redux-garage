import React from 'react';
import '../assets/stylesheets/cars-index.scss';
import { connect } from 'react-redux';
import SidePanel from '../components/side-panel';
import CarCard from '../components/car-card';

class CarsIndex extends React.Component {
  render() {
    return(
    <div className="cars-index">
      <SidePanel />
      <div className='cars-list'>
        {this.props.cars.map((car) => {
          return <CarCard key={car.id} car={car} />
        })}
      </div>
    </div>);
  }
}

const mapStateToProps = (state) => {
  return {
    cars: state.cars
  }
}

export default connect(mapStateToProps)(CarsIndex);
