export const FETCH_CARS = "FETCH_CARS";
export const CAR_ADDED = "CAR_ADDED";
export const CAR_DELETED = "CAR_DELETED";

export const fetchCars = (garage) => {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`)
    .then(response => response.json());

  return {
    type: FETCH_CARS,
    payload: promise
  }
}

export const addCar = (garage, body, callback) => {
  const request = fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body)
  }).then(response => response.json())
    .then(callback);

  return {
  type: CAR_ADDED,
  payload: request
  };
}

export const deleteCar = (id) => {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`, {
    method: 'DELETE'
    }).then(response => response.json());

  return {
    type: CAR_DELETED,
    payload: promise
  }
}
