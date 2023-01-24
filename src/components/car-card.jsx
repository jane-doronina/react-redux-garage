import SquareLogo from "../assets/images/logo_square.svg";

const CarCard = (props) => {
  return(
    <div className="car-card">
      <img src={SquareLogo} alt="Car logo" />
      <div className="car-card-info">
        <h2>{props.car.brand} – {props.car.model}</h2>
        <p><strong>Owner:</strong> {props.car.owner}</p>
      </div>
    </div>
  )

}

export default CarCard;
