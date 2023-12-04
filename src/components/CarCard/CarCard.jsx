import { Heart, GasStation, Profile2User } from "iconsax-react";
import carIcon from "assets/car-icon.svg";
import "./CarCard.css";

function CarCard({ carDetails }) {
  const { fuel, capacity, type, name, transmission, image, price } = carDetails;

  return (
    <div className="carCard">
      <div className="carCard__top">
        <div className="carCard__details">
          <p className="carCard__name">{name}</p>
          <p className="carCard__type">{type}</p>
        </div>

        <Heart variant="Bold" size={24} color="#ED3F3F" />
      </div>

      <div className="carCard__image-container">
        <img src={image} alt={name} className="carCard__image" />
      </div>

      <ul className="carCard__specs">
        <li className="carCard__item">
          <GasStation
            size={24}
            className="carCard__item-icon"
            color="var(--color-secondary-300)"
          />

          <p className="cardCard__item-value">{fuel}L</p>
        </li>

        <li className="carCard__item">
          <img
            src={carIcon}
            alt="Transmission"
            className="cardCard__item-icon"
          />

          <p className="cardCard__item-value">{transmission}</p>
        </li>

        <li className="carCard__item">
          <Profile2User
            size={24}
            className="carCard__item-icon"
            color="var(--color-secondary-300)"
          />

          <p className="cardCard__item-value">{capacity} people</p>
        </li>
      </ul>

      <div className="carCard__footer">
        <p className="carCard__pricing">
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(+(price / 100).toFixed(2))}{" "}
          / day
        </p>
        <button className="primary">Rent Now</button>
      </div>
    </div>
  );
}

export default CarCard;
