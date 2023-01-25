import React from 'react';
import { connect } from 'react-redux';

import SidePanel from '../components/side-panel';

class CarsShow extends React.Component {


  render() {
    return(
      <div className="cars-show">
        <SidePanel garage={this.props.garage} path="/" text="Back to list" />
        <div></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cars: state.cars,
    garage: state.garage
  }
}


export default connect(mapStateToProps)(CarsShow);
