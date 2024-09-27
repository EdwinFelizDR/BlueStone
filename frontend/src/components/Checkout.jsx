import React from "react";
import "../css/Checkout.css";


function Checkout() {
  return (
    <main id="main" role="main" className="container">
      <section id="checkout-container" className="section">
        <div>
          <div>
            <div>
              <h4>Billing address</h4>
              <form noValidate>
                <div className="form-group">
                  <div className="form-group">
                    <label htmlFor="firstName" className="label">
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder=""
                      required
                      className="input"
                    />
                    <div className="error-message">
                      Valid first name is required.
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName" className="label">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder=""
                      required
                      className="input"
                    />
                    <div className="error-message">
                      Valid last name is required.
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="username" className="label">
                    Username
                  </label>
                  <div className="form-group">
                    <div>
                      <span>@</span>
                    </div>
                    <input
                      type="text"
                      id="username"
                      placeholder="Username"
                      required
                      className="input"
                    />
                    <div className="error-message">Your username is required.</div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="label">
                    Email <span>(Optional)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    className="input"
                  />
                  <div className="error-message">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="address" className="label">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    placeholder="1234 Main St"
                    required
                    className="input"
                  />
                  <div className="error-message">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="address2" className="label">
                    Address 2 <span>(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="address2"
                    placeholder="Apartment or suite"
                    className="input"
                  />
                </div>

                <div className="form-group">
                  <div className="form-group">
                    <label htmlFor="country" className="label">
                      Country
                    </label>
                    <select id="country" required className="input">
                      <option value="">Choose...</option>
                      <option>United States</option>
                    </select>
                    <div className="error-message">
                      Please select a valid country.
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="state" className="label">
                      State
                    </label>
                    <select id="state" required className="input">
                      <option value="">Choose...</option>
                      <option>California</option>
                    </select>
                    <div className="error-message">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="zip" className="label">
                      Zip
                    </label>
                    <input
                      type="text"
                      id="zip"
                      placeholder=""
                      required
                      className="input"
                    />
                    <div className="error-message">Zip code required.</div>
                  </div>
                </div>
                <hr className="hr" />
                <div className="form-group">
                  <input type="checkbox" id="same-address" />
                  <label htmlFor="same-address">
                    Shipping address is the same as my billing address
                  </label>
                </div>
                <div className="form-group">
                  <input type="checkbox" id="save-info" />
                  <label htmlFor="save-info">
                    Save this information for next time
                  </label>
                </div>
                <hr className="hr" />

                <h4>Payment</h4>

                <div className="form-group">
                  <div className="form-group">
                    <input
                      id="credit"
                      name="paymentMethod"
                      type="radio"
                      defaultChecked
                      required
                    />
                    <label htmlFor="credit">Credit card</label>
                  </div>
                  <div className="form-group">
                    <input id="debit" name="paymentMethod" type="radio" required />
                    <label htmlFor="debit">Debit card</label>
                  </div>
                  <div className="form-group">
                    <input id="paypal" name="paymentMethod" type="radio" required />
                    <label htmlFor="paypal">Paypal</label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-group">
                    <label htmlFor="cc-name" className="label">
                      Name on card
                    </label>
                    <input
                      type="text"
                      id="cc-name"
                      placeholder=""
                      required
                      className="input"
                    />
                    <small className="small-text">
                      Full name as displayed on card
                    </small>
                    <div className="error-message">Name on card is required</div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="cc-number" className="label">
                      Credit card number
                    </label>
                    <input
                      type="text"
                      id="cc-number"
                      placeholder=""
                      required
                      className="input"
                    />
                    <div className="error-message">
                      Credit card number is required
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-group">
                    <label htmlFor="cc-expiration" className="label">
                      Expiration
                    </label>
                    <input
                      type="text"
                      id="cc-expiration"
                      placeholder=""
                      required
                      className="input"
                    />
                    <div className="error-message">Expiration date required</div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="cc-cvv" className="label">
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cc-cvv"
                      placeholder=""
                      required
                      className="input"
                    />
                    <div className="error-message">Security code required</div>
                  </div>
                </div>
                <hr className="hr" />
                <button type="submit" className="button">
                  Place order
                </button>
              </form>
            </div>
          </div>
        </div>
        <a href="#">
          <i></i>
        </a>
      </section>
    </main>
  );
}

export default Checkout;