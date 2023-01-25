import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { addCar } from '../actions';
import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom';

import SidePanel from '../components/side-panel';
import "../assets/stylesheets/cars-new.scss";

// VALIDATIONS

const required = value => value ? undefined : 'Required'

const CarsNew = (props) => {
  const renderField = (field) => {
    return (
    <div className="form-group">
    <label>{field.label}</label>
    <input
    className="form-control"
    type={field.type} placeholder={field.placeholder}
    {...field.input}
    />
    </div>
    );
  }

  const navigate = useNavigate();

  const onSubmit = (values) => {
    props.addCar(props.garage, values, () => {
      navigate('/');
    });
  }

  return(
    <div className="cars-new">
      <SidePanel garage={props.garage} path="/" text="Back to list" />
      <div className="form-div">
        <form onSubmit={props.handleSubmit(onSubmit)}>
          <Field
          label="Brand"
          name="brand"
          type="text"
          placeholder="Aston Martin"
          component={renderField}
          validate={ required }
          />
          <Field
          label="Model"
          name="model"
          type="text"
          placeholder="DB Mark III"
          component={renderField}
          validate={ required }
          />
          <Field
          label="Owner"
          name="owner"
          type="text"
          placeholder="James Bond"
          component={renderField}
          validate={ required }
          />
          <Field
          label="Plate"
          name="plate"
          type="text"
          placeholder="418-ED-94"
          component={renderField}
          validate={ required }
          />
          <button className="btn btn-danger" type="submit" disabled={props.pristine || props.submitting} onClick={props.reset}>
          Add car
          </button>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    garage: state.garage
  }
}

export default reduxForm({ form: 'newCarForm' })(
  connect(mapStateToProps, { addCar })(CarsNew)
 );
