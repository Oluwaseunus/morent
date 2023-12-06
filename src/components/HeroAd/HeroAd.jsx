import "./HeroAd.css";

function HeroAd({ color, pattern, heading, text, button, image }) {
  return (
    <div
      className="heroAd"
      style={{
        backgroundColor: color,
        backgroundImage: `url(${pattern})`,
      }}
    >
      <div className="heroAd__container">
        <h2>{heading}</h2>
        <p>{text}</p>

        {button}
      </div>

      {image}
    </div>
  );
}

export default HeroAd;
