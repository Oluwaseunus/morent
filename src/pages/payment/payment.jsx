import { ArrowDown2 } from "iconsax-react";

import Layout from "components/Layout";
import { formatMoney } from "utils/currency";

import visa from "assets/visa.svg";
import paypal from "assets/paypal.svg";
import bitcoin from "assets/bitcoin.svg";
import markDark from "assets/mark-dark.svg";
import mastercard from "assets/mastercard.svg";
import markDefault from "assets/mark-default.svg";
import security from "assets/security-safety.svg";

import "./payment.css";

function Payment() {
  return (
    <Layout>
      <main className="payment">
        <div className="payment__forms">
          <section className="payment__form">
            <div className="payment__form-heading">
              <p className="payment__form-header">Billing Info</p>
              <div className="payment__form-heading-info">
                <p className="payment__form-heading-description">
                  Please enter your billing info
                </p>

                <p className="payment__form-heading-count">Step 1 of 4</p>
              </div>
            </div>

            <ul className="payment__form-fields">
              <li className="payment__form-fields-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your name" />
              </li>

              <li className="payment__form-fields-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="text" id="phone" placeholder="Phone number" />
              </li>

              <li className="payment__form-fields-group">
                <label htmlFor="address">Address</label>
                <input type="text" id="address" placeholder="Address" />
              </li>

              <li className="payment__form-fields-group">
                <label htmlFor="town">Town / City</label>
                <input type="text" id="town" placeholder="Town or city" />
              </li>
            </ul>
          </section>

          <section className="payment__form">
            <div className="payment__form-heading">
              <p className="payment__form-header">Rental Info</p>
              <div className="payment__form-heading-info">
                <p className="payment__form-heading-description">
                  Please select your rental date
                </p>

                <p className="payment__form-heading-count">Step 2 of 4</p>
              </div>
            </div>

            <div className="datepicker__hero">
              <img src={markDark} alt="Pick - Up" />
              <p className="datepicker__label">Pick - Up</p>
            </div>

            <ul className="payment__form-fields">
              <li className="payment__form-fields-group">
                <label htmlFor="locations">Locations</label>

                <div className="payment__form-fields-select">
                  <select name="locations" id="locations">
                    <option value="" selected disabled>
                      Select your city
                    </option>
                  </select>

                  <ArrowDown2
                    size={14}
                    variant="Outline"
                    color="var(--color-secondary-300)"
                    className="payment__form-select-chevron"
                  />
                </div>
              </li>

              <li className="payment__form-fields-group">
                <label htmlFor="date">Date</label>

                <div className="payment__form-fields-select">
                  <select name="date" id="date">
                    <option value="" selected disabled>
                      Select your date
                    </option>
                  </select>

                  <ArrowDown2
                    size={14}
                    variant="Outline"
                    color="var(--color-secondary-300)"
                    className="payment__form-select-chevron"
                  />
                </div>
              </li>

              <li className="payment__form-fields-group">
                <label htmlFor="time">Time</label>

                <div className="payment__form-fields-select">
                  <select name="time" id="time">
                    <option value="" selected disabled>
                      Select your time
                    </option>
                  </select>

                  <ArrowDown2
                    size={14}
                    variant="Outline"
                    color="var(--color-secondary-300)"
                    className="payment__form-select-chevron"
                  />
                </div>
              </li>
            </ul>

            <div className="datepicker__hero">
              <img src={markDefault} alt="Drop - Off" />
              <p className="datepicker__label">Drop - Off</p>
            </div>

            <ul className="payment__form-fields">
              <li className="payment__form-fields-group">
                <label htmlFor="locations">Locations</label>

                <div className="payment__form-fields-select">
                  <select name="locations" id="locations">
                    <option value="" selected disabled>
                      Select your city
                    </option>
                  </select>

                  <ArrowDown2
                    size={14}
                    variant="Outline"
                    color="var(--color-secondary-300)"
                    className="payment__form-select-chevron"
                  />
                </div>
              </li>

              <li className="payment__form-fields-group">
                <label htmlFor="date">Date</label>

                <div className="payment__form-fields-select">
                  <select name="date" id="date">
                    <option value="" selected disabled>
                      Select your date
                    </option>
                  </select>

                  <ArrowDown2
                    size={14}
                    variant="Outline"
                    color="var(--color-secondary-300)"
                    className="payment__form-select-chevron"
                  />
                </div>
              </li>

              <li className="payment__form-fields-group">
                <label htmlFor="time">Time</label>

                <div className="payment__form-fields-select">
                  <select name="time" id="time">
                    <option value="" selected disabled>
                      Select your time
                    </option>
                  </select>

                  <ArrowDown2
                    size={14}
                    variant="Outline"
                    color="var(--color-secondary-300)"
                    className="payment__form-select-chevron"
                  />
                </div>
              </li>
            </ul>
          </section>

          <section className="payment__form">
            <div className="payment__form-heading">
              <p className="payment__form-header">Payment Method</p>
              <div className="payment__form-heading-info">
                <p className="payment__form-heading-description">
                  Please enter your payment method
                </p>

                <p className="payment__form-heading-count">Step 3 of 4</p>
              </div>
            </div>

            <ul className="payment__form-methods">
              <li className="payment__form-method">
                <div>
                  <div className="payment__form-method-header">
                    <input
                      type="radio"
                      value="Credit Card"
                      name="paymentMethod"
                      id="payment__method-creditCard"
                    />

                    <label htmlFor="payment__method-creditCard">
                      Credit Card
                    </label>
                  </div>

                  <div className="payment__form-method-icons">
                    <img src={visa} alt="Visa Logo" />
                    <img src={mastercard} alt="Mastercard Logo" />
                  </div>
                </div>

                <ul className="payment__form-fields">
                  <li className="payment__form-fields-group">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input
                      type="text"
                      id="cardNumber"
                      placeholder="Card Number"
                    />
                  </li>

                  <li className="payment__form-fields-group">
                    <label htmlFor="expirationDate">Expiration Date</label>
                    <input
                      type="text"
                      id="expirationDate"
                      placeholder="DD / MM / YYYY"
                    />
                  </li>

                  <li className="payment__form-fields-group">
                    <label htmlFor="cardHolder">Card Holder</label>
                    <input
                      type="text"
                      id="cardHolder"
                      placeholder="Card Holder"
                    />
                  </li>

                  <li className="payment__form-fields-group">
                    <label htmlFor="cvc">CVC</label>
                    <input type="text" id="cvc" placeholder="CVC" />
                  </li>
                </ul>
              </li>

              <li className="payment__form-method">
                <div>
                  <div className="payment__form-method-header">
                    <input
                      type="radio"
                      value="Paypal"
                      name="paymentMethod"
                      id="payment__method-paypal"
                    />

                    <label htmlFor="payment__method-paypal">PayPal</label>
                  </div>

                  <div className="payment__form-method-icons">
                    <img src={paypal} alt="Paypal Logo" />
                  </div>
                </div>
              </li>

              <li className="payment__form-method">
                <div>
                  <div className="payment__form-method-header">
                    <input
                      type="radio"
                      value="Bitcoin"
                      name="paymentMethod"
                      id="payment__method-bitcoin"
                    />

                    <label htmlFor="payment__method-bitcoin">Bitcoin</label>
                  </div>

                  <div className="payment__form-method-icons">
                    <img src={bitcoin} alt="Bitcoin Logo" />
                  </div>
                </div>
              </li>
            </ul>
          </section>

          <section className="payment__form">
            <div className="payment__form-heading">
              <p className="payment__form-header">Confirmation</p>
              <div className="payment__form-heading-info">
                <p className="payment__form-heading-description">
                  We are getting to the end. Just few clicks and your rental is
                  ready!
                </p>

                <p className="payment__form-heading-count">Step 4 of 4</p>
              </div>
            </div>

            <ul className="payment__form-fields payment__confirmation-fields">
              <li className="payment__form-fields-group">
                <input
                  type="checkbox"
                  id="payment__form-checkboxes-marketing"
                  name="payment__form-checkboxes-marketing"
                />

                <label htmlFor="payment__form-checkboxes-marketing">
                  I agree with receiving Marketing and newsletter emails. No
                  spam, promise!
                </label>
              </li>

              <li className="payment__form-fields-group">
                <input
                  type="checkbox"
                  id="payment__form-checkboxes-terms"
                  name="payment__form-checkboxes-terms"
                />

                <label htmlFor="payment__form-checkboxes-terms">
                  I agree with our terms and conditions and privacy policy.
                </label>
              </li>
            </ul>

            <button className="primary payment__form-action">Rent Now</button>

            <div className="payment__form-information">
              <img src={security} alt="Security and Safety" />

              <p>All your data is safe</p>
              <span>
                We are using the most advanced security to provide you the best
                experience ever.
              </span>
            </div>
          </section>
        </div>

        <section className="payment__summary">
          <div className="payment__summary-header">
            <h3 className="payment__summary-heading">Rental Summary</h3>
            <p className="payment__summary-description">
              Prices may change depending on the length of the rental and the
              price of your rental car.
            </p>
          </div>

          <div className="payment__summary-car">
            <div className="payment__summary-car-image"></div>
            <div className="payment__summary-car-details">
              <p>Nissan GT - R</p>
              <div className="payment__summary-car-rating">
                <p className="payment__summary-car-reviewers">440+ Reviewers</p>
              </div>
            </div>
          </div>

          <hr className="payment__summary-hr" />

          <ul className="payment__summary-items">
            <li className="payment__summary-item">
              <p className="payment__summary-item-title">Subtotal</p>
              <p className="payment__summary-item-cost">{formatMoney(8000)}</p>
            </li>

            <li className="payment__summary-item">
              <p className="payment__summary-item-title">Tax</p>
              <p className="payment__summary-item-cost">{formatMoney(0)}</p>
            </li>
          </ul>

          <div className="payment__summary-promo">
            <input
              type="text"
              className="payment__summary-promo-input"
              placeholder="Apply promo code"
            />

            <button className="secondary">Apply now</button>
          </div>

          <div className="payment__summary-total">
            <div className="payment__summary-total-description">
              <p className="payment__summary-total-title">Total Rental Price</p>
              <p className="payment__summary-total-text">
                Overall price and includes rental discount
              </p>
            </div>

            <p className="payment__summary-total-price">{formatMoney(8000)}</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Payment;
