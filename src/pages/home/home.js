import Layout from "components/Layout";
import DatePicker from "components/DatePicker";

import markDark from "assets/mark-dark.svg";
import markDefault from "assets/mark-default.svg";
import { ReactComponent as Swap } from "assets/swap.svg";
import KoenigseggImage from "assets/koenigsegg-image.png";

import "./home.css";
import CarCard from "components/CarCard";

const carDetails = [
  {
    fuel: 90,
    capacity: 6,
    price: 9900,
    type: "Sport",
    name: "Koenigsegg",
    id: "1701726248107",
    transmission: "Manual",
    image: KoenigseggImage,
  },
  {
    fuel: 90,
    capacity: 6,
    price: 9900,
    type: "Sport",
    name: "Koenigsegg",
    id: "1701726248107",
    transmission: "Manual",
    image: KoenigseggImage,
  },
  {
    fuel: 90,
    capacity: 6,
    price: 9900,
    type: "Sport",
    name: "Koenigsegg",
    id: "1701726248107",
    transmission: "Manual",
    image: KoenigseggImage,
  },
  {
    fuel: 90,
    capacity: 6,
    price: 9900,
    type: "Sport",
    name: "Koenigsegg",
    id: "1701726248107",
    transmission: "Manual",
    image: KoenigseggImage,
  },
  {
    fuel: 90,
    capacity: 6,
    price: 9900,
    type: "Sport",
    name: "Koenigsegg",
    id: "1701726248107",
    transmission: "Manual",
    image: KoenigseggImage,
  },
  {
    fuel: 90,
    capacity: 6,
    price: 9900,
    type: "Sport",
    name: "Koenigsegg",
    id: "1701726248107",
    transmission: "Manual",
    image: KoenigseggImage,
  },
  {
    fuel: 90,
    capacity: 6,
    price: 9900,
    type: "Sport",
    name: "Koenigsegg",
    id: "1701726248107",
    transmission: "Manual",
    image: KoenigseggImage,
  },
  {
    fuel: 90,
    capacity: 6,
    price: 9900,
    type: "Sport",
    name: "Koenigsegg",
    id: "1701726248107",
    transmission: "Manual",
    image: KoenigseggImage,
  },
];

function Home() {
  return (
    <Layout>
      <main>
        <h1>Home</h1>
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
            {carDetails.map((carDetail) => (
              <CarCard key={carDetail.id} carDetails={carDetail} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
