import "./HeroAd.css";

function HeroAd({ color, pattern, heading, text, button, image }) {
  return (
    <div
      className="hero__child"
      style={{
        backgroundColor: color,
        backgroundImage: `url(${pattern})`,
      }}
    >
      <div className="hero__child-container">
        <h2>{heading}</h2>
        <p>{text}</p>

        {button}
      </div>

      {image}
    </div>
  );
}

export default HeroAd;
