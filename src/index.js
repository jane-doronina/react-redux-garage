import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/stylesheets/index.scss';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';

import CarsIndex from './containers/cars-index';
import CarsNew from './containers/cars-new';
import CarsShow from './containers/cars-show';
import carsReducer from "./reducers/cars-reducer"

const garageName = `garage${Math.floor(10 + (Math.random() * 90))}`; //prompt("What is your garage?") ||
const initialState = {
  garage: "garage48",
  cars: [
    { id: 1, brand: 'Peugeot', model: '106', owner: 'John', plate: 'WOB-ED-42' },
    { id: 2, brand: 'Renault', model: 'Scenic', owner: 'Paul', plate: 'AAA-12-BC' },
    { id: 3, brand: 'Aston Martin', model: 'DB Mark III', owner: 'James', plate: '418-ED-94' },
    { id: 4, brand: 'VW', model: 'Beetle', owner: 'George', plate: '1234-XD-75' }
  ]
};

const history = createBrowserHistory();

const reducers = combineReducers({
  garage: (state = null, action) => state,
  cars: carsReducer,
  form: formReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

const store = createStore(reducers, initialState, middlewares);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <Routes>
          <Route path="/" element={<CarsIndex />} />
          <Route path="/cars/new" element={<CarsNew />} />
          <Route path="/cars/:id" element={<CarsShow />} />
        </Routes>
      </Router>
    </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
