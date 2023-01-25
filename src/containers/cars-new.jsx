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
const plate = value => value && !/^[A-Z0-9-]+$/.test(value) ? 'Invalid plate number' : undefined

const CarsNew = (props) => {
  const renderField = ({ input, label, type, placeholder, meta: { touched, error, warning } }) => {
    return (
    <div className="form-group">
    <label>{label}</label>
    <input
    className="form-control"
    type={type} placeholder={placeholder}
    {...input}
    />
    {touched && ((error && <span class="warning">{error}</span>) || (warning && <span class="warning">{warning}</span>))}
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
          validate={ [required, plate ] }
          />
          <button className="btn btn-danger mt-3" type="submit" disabled={props.invalid || props.submitting}>
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
