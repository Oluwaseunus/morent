import {
  Car,
  Home,
  More,
  Chart,
  Message,
  Setting,
  Calendar,
  Briefcase,
  InfoCircle,
  LogoutCurve,
  EmptyWalletChange,
} from "iconsax-react";

import Layout from "components/Layout";
import PieRing from "components/PieRing";
import DatePicker from "components/DatePicker";
import RecentTransaction from "components/RecentTransaction";

import { formatMoney } from "utils/currency";

import map from "assets/map.svg";
import gtr from "assets/gtr.png";
import markDark from "assets/mark-dark.svg";
import markDefault from "assets/mark-default.svg";

import "./admin.css";

function Admin() {
  return (
    <Layout hideFooter>
      <div className="admin__container">
        <aside className="admin__aside">
          <h3 className="admin__aside-heading">Main Menu</h3>

          <ul className="admin__aside-links">
            <li className="admin__aside-link admin__aside-link-active">
              <Home variant="Bold" size={24} />
              Dashboard
            </li>

            <li className="admin__aside-link">
              <Car variant="Linear" size={24} />
              <span>Car Rent</span>
            </li>

            <li className="admin__aside-link">
              <Chart variant="Linear" size={24} />
              <span>Insight</span>
            </li>

            <li className="admin__aside-link">
              <EmptyWalletChange variant="Linear" size={24} />
              <span>Reimburse</span>
            </li>

            <li className="admin__aside-link">
              <Message variant="Linear" size={24} />
              <span>Inbox</span>
            </li>

            <li className="admin__aside-link">
              <Calendar variant="Linear" size={24} />
              <span>Calendar</span>
            </li>
          </ul>

          <h3 className="admin__aside-heading">Preferences</h3>

          <ul className="admin__aside-links">
            <li className="admin__aside-link">
              <Setting variant="Linear" size={24} />
              <span>Settings</span>
            </li>

            <li className="admin__aside-link">
              <InfoCircle variant="Linear" size={24} />
              <span>Help Center</span>
            </li>

            <li className="admin__aside-link">
              <Briefcase variant="Linear" size={24} />
              <span>Dark Mode</span>
            </li>
          </ul>

          <ul className="admin__aside-links">
            <li className="admin__aside-link">
              <LogoutCurve variant="Linear" size={24} />
              <span>Log out</span>
            </li>
          </ul>
        </aside>

        <main className="admin">
          <section className="admin__section admin__section-left">
            <div className="admin__aside-header">
              <h3 className="admin__section-heading">Details Rental</h3>
            </div>

            <div className="admin__section-map-container">
              <img src={map} alt="Map" className="admin__section-map" />
            </div>

            <div className="admin__section-car">
              <div className="admin__section-car-image">
                <img src={gtr} alt="Nissan GT - R" />
              </div>
              <div className="admin__section-car-details">
                <p className="admin__section-car-name">Nissan GT - R</p>
                <span className="admin__section-car-type">Sport Car</span>
              </div>

              <p className="admin__section-car-number">#9764</p>
            </div>

            <div className="admin__section-rental">
              <DatePicker label="Pick - Up" icon={markDark} />
              <DatePicker label="Drop - Off" icon={markDefault} />
            </div>

            <hr className="admin__section-details-rental" />

            <div className="payment__summary-total">
              <div className="payment__summary-total-description">
                <p className="payment__summary-total-title">
                  Total Rental Price
                </p>
                <p className="payment__summary-total-text">
                  Overall price and includes rental discount
                </p>
              </div>

              <p className="payment__summary-total-price">
                {formatMoney(8000)}
              </p>
            </div>
          </section>

          <section className="admin__section admin__section-right">
            <section className="admin__section-info">
              <div className="admin__section-info-header">
                <h3 className="admin__section-heading">Top 5 Car Rental</h3>
                <More variant="Linear" size={24} />
              </div>

              <div className="admin__section-info-details">
                <div className="admin__info-donut">
                  <PieRing
                    stroke={20}
                    // radius={150}
                    radius={110}
                    gapWidth={5}
                    data={[
                      { value: 17439, color: "#0D3559" },
                      { value: 9478, color: "#175D9C" },
                      { value: 18197, color: "#2185DE" },
                      { value: 12510, color: "#63A9E8" },
                      { value: 14406, color: " #A6CEF2" },
                    ]}
                  />

                  <div className="admin__info-donut-content">
                    <p className="admin__info-donut-count">
                      {Intl.NumberFormat("en-US").format(72030)}
                    </p>

                    <span className="admin__info-donut-details">
                      Rental Car
                    </span>
                  </div>
                </div>

                <ul className="admin__section-info-list">
                  <li className="admin__section-info-item">
                    <span style={{ backgroundColor: "#0D3559" }}>&nbsp;</span>
                    <p>Sport Car</p>
                    <span>{Intl.NumberFormat("en-US").format(17439)}</span>
                  </li>

                  <li className="admin__section-info-item">
                    <span style={{ backgroundColor: "#175D9C" }}>&nbsp;</span>
                    <p>SUV</p>
                    <span>{Intl.NumberFormat("en-US").format(9478)}</span>
                  </li>

                  <li className="admin__section-info-item">
                    <span style={{ backgroundColor: "#2185DE" }}>&nbsp;</span>
                    <p>Coupe</p>
                    <span>{Intl.NumberFormat("en-US").format(18197)}</span>
                  </li>

                  <li className="admin__section-info-item">
                    <span style={{ backgroundColor: "#63A9E8" }}>&nbsp;</span>
                    <p>Hatchback</p>
                    <span>{Intl.NumberFormat("en-US").format(12510)}</span>
                  </li>

                  <li className="admin__section-info-item">
                    <span style={{ backgroundColor: "#A6CEF2" }}>&nbsp;</span>
                    <p>MPV</p>
                    <span>{Intl.NumberFormat("en-US").format(14406)}</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="admin__section-info">
              <div className="admin__section-header">
                <h3 className="admin__section-heading">Recent Transaction</h3>
                <button className="secondary">View all</button>
              </div>

              <div className="admin__section-transactions">
                <RecentTransaction />
                <RecentTransaction />
                <RecentTransaction />
                <RecentTransaction />
              </div>
            </section>
          </section>
        </main>
      </div>
    </Layout>
  );
}

export default Admin;
