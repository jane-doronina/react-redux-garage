import SquareLogo from "../assets/images/logo_square.svg";
import { Link } from "react-router-dom";

const CarCard = (props) => {
  return(
    <div className="car-card">
      <img src={SquareLogo} alt="Car logo" />
      <div className="car-card-info">
        <Link to={`/cars/${props.car.id}`}><h2>{props.car.brand} – {props.car.model}</h2></Link>
        <p><strong>Owner:</strong> {props.car.owner}</p>
      </div>
    </div>
  )

}

export default CarCard;
