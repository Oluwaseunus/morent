import stars from "assets/stars.svg";
import profileImage from "assets/profile-image.jpeg";

import "./Review.css";

const Review = () => {
  return (
    <div className="review">
      <div className="review__profile-image">
        <img src={profileImage} alt="Alex Stanton" />
      </div>
      <div className="review__body">
        <div className="review__details">
          <div className="review__profile-block">
            <p className="review__profile-name">Alex Stanton</p>
            <p className="review__profile-role">CEO at Bukalapak</p>
          </div>

          <div className="review__information">
            <p className="review__information-date">21 July 2022</p>
            <img src={stars} alt="4/5 rating" />
          </div>
        </div>
        <p className="review__description">
          We are very happy with the service from the MORENT App. Morent has a
          low price and also a large variety of cars with good and comfortable
          facilities. In addition, the service provided by the officers is also
          very friendly and very polite.
        </p>
      </div>
    </div>
  );
};

export default Review;
