import { Heart } from "iconsax-react";

import "./CarDetail.css";
import { formatMoney } from "utils/currency";

const CarDetail = () => {
  return (
    <div className="carDetail">
      <div className="carDetail__header">
        <div className="carDetail__header-details">
          <h2>Nissan GT - R</h2>

          <div className="carDetail__header-rating">
            <p className="carDetail__header-count">440+ Reviewers</p>
          </div>
        </div>

        <Heart variant="Bold" size={24} color="#ED3F3F" />
      </div>

      <p className="carDetail__description">
        NISMO has become the embodiment of Nissan's outstanding performance,
        inspired by the most unforgiving proving ground, the "race track".
      </p>

      <ul className="carDetail__tags">
        <li>
          <p>Type Car</p>
          <p>Sport</p>
        </li>
        <li>
          <p>Capacity</p>
          <p>2 Person</p>
        </li>
        <li>
          <p>Steering</p>
          <p>Manual</p>
        </li>
        <li>
          <p>Gasoline</p>
          <p>70L</p>
        </li>
      </ul>

      <div className="carCard__footer carDetail__footer">
        <div>
          {/* <p className="carCard__pricing">{formatMoney(price)} / day</p> */}
          <p className="carCard__pricing">
            {formatMoney(8000)} / <span>day</span>
          </p>

          {/* {discountPrice && ( */}
          {true && <p className="carCard__discount">{formatMoney(10000)}</p>}
        </div>
        <button className="primary">Rent Now</button>
      </div>
    </div>
  );
};

export default CarDetail;
