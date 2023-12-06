import Layout from "components/Layout";
import HeroAd from "components/HeroAd";
import CarCard from "components/CarCard";
import DatePicker from "components/DatePicker";

import gtr from "assets/gtr.png";
import radial from "assets/radial.svg";
import chevrons from "assets/chevrons.svg";
import markDark from "assets/mark-dark.svg";
import markDefault from "assets/mark-default.svg";
import { ReactComponent as Swap } from "assets/swap.svg";
import KoenigseggImage from "assets/koenigsegg-image.png";

import { carDetails } from "constants/data";

import "./home.css";

function Home() {
  return (
    <Layout>
      <main>
        <div className="ads">
          <HeroAd
            pattern={radial}
            color="var(--color-information-500)"
            heading="The Best Platform for Car Rental"
            button={<button className="primary">Rental Car</button>}
            text="Ease of doing a car rental safely and reliably. Of course at a low price."
            image={
              <img
                src={KoenigseggImage}
                className="heroAd__image"
                style={{ bottom: "-1rem" }}
                alt="Ease of doing a car rental safely and reliably. Of course at a low price."
              />
            }
          />

          <HeroAd
            pattern={chevrons}
            color="var(--color-primary-500)"
            heading="Easy way to rent a car at a low price"
            button={<button className="information">Rental Car</button>}
            text="Providing cheap car rental services and safe and comfortable facilities."
            image={
              <img
                src={gtr}
                className="heroAd__image"
                alt="Ease of doing a car rental safely and reliably. Of course at a low price."
              />
            }
          />
        </div>

        <div className="hero">
          <DatePicker label="Pick - Up" icon={markDark} />

          <button className="hero__swap">
            <Swap />
          </button>

          <DatePicker label="Drop - Off" icon={markDefault} />
        </div>

        <section>
          <div className="section__heading">
            <h2 className="section__title">Popular Car</h2>
            <button className="section__action secondary">View All</button>
          </div>

          <div className="section__body">
            {carDetails.slice(0, 4).map((carDetail) => (
              <CarCard key={carDetail.id} carDetails={carDetail} />
            ))}
          </div>
        </section>

        <section>
          <div className="section__heading">
            <h2 className="section__title">Recommendation Car</h2>
          </div>

          <div className="section__body">
            {carDetails.map((carDetail) => (
              <CarCard key={carDetail.id} carDetails={carDetail} />
            ))}
          </div>
        </section>

        <div className="more">
          <div className="empty">&nbsp;</div>
          <button className="primary">Show more car</button>
          <p className="more__carCount">120 Car</p>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
