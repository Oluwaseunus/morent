import { ArrowDown2 } from "iconsax-react";

import Review from "components/Review";
import Layout from "components/Layout";
import CarCard from "components/CarCard";
import CarDetail from "components/CarDetail";

import { carDetails } from "constants/data";

import gtr from "assets/gtr.png";
import gtr1 from "assets/gtr-1.png";
import gtr2 from "assets/gtr-2.png";

import "./other.css";

function OtherPage() {
  return (
    <Layout>
      <div className="other__container">
        <aside className="other__aside">
          <div className="other__aside-header">
            <p className="other__aside-heading">Type</p>
          </div>
        </aside>

        <main className="other">
          <section className="other__hero">
            <div className="other__images">
              <div className="other__images-main">
                <div className="other__images-text-container">
                  <p>Sports car with the best design and acceleration</p>
                  <span>
                    Safety and comfort while driving a futuristic and elegant
                    sports car
                  </span>
                </div>

                <div className="other__images-main-container">
                  <img src={gtr} alt="Nissan GT - R" />
                </div>
              </div>

              <ul className="other__images-list">
                <li className="other__images-item other__images-item-block">
                  <img src={gtr} alt="Nissan GT - R" />
                </li>

                <li className="other__images-item">
                  <img src={gtr1} alt="Nissan GT - R" />
                </li>
                <li className="other__images-item">
                  <img src={gtr2} alt="Nissan GT - R" />
                </li>
              </ul>
            </div>

            <CarDetail />
          </section>

          <section className="other__reviews">
            <div className="other__reviews-heading">
              <p className="other__reviews-title">Reviews</p>

              <div className="other__reviews-badge">
                <p className="other__reviews-count">13</p>
              </div>
            </div>

            <div className="other__reviews-body">
              <Review />
              <Review />

              <button className="secondary other__reviews-show-all">
                Show All{" "}
                <ArrowDown2
                  size={16}
                  style={{ marginLeft: 8 }}
                  color="var(--color-secondary-300)"
                />
              </button>
            </div>
          </section>

          <section className="other__recent">
            <div className="section__heading">
              <h2 className="section__title">Recent Car</h2>
              <button className="section__action secondary">View All</button>
            </div>

            <ul className="other__recent-cars">
              {carDetails.slice(0, 3).map((carDetail) => (
                <CarCard key={carDetail.id} carDetails={carDetail} as="li" />
              ))}
            </ul>
          </section>

          <section className="other__recommendation">
            <div className="section__heading">
              <h2 className="section__title">Recommendation Car</h2>
              <button className="section__action secondary">View All</button>
            </div>

            <ul className="other__recommendation-cars">
              {carDetails.slice(0, 3).map((carDetail) => (
                <CarCard key={carDetail.id} carDetails={carDetail} as="li" />
              ))}
            </ul>
          </section>
        </main>
      </div>
    </Layout>
  );
}

export default OtherPage;
