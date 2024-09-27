import React from "react";

function Checkout() {
  return (
    <>
      <main id="main" role="main">
        <section id="checkout-container">
          <div>
            <div>
              <div>
                <h4>Billing address</h4>
                <form noValidate>
                  <div>
                    <div>
                      <label htmlFor="firstName">First name</label>
                      <input type="text" id="firstName" placeholder="" required/>
                      <div>Valid first name is required.</div>
                    </div>
                    <div>
                      <label htmlFor="lastName">Last name</label>
                      <input type="text" id="lastName" placeholder="" required />
                      <div>Valid last name is required.</div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="username">Username</label>
                    <div>
                      <div>
                        <span>@</span>
                      </div>
                      <input type="text" id="username" placeholder="Username" required />
                      <div>Your username is required.</div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email">
                      Email <span>(Optional)</span>
                    </label>
                    <input type="email" id="email" placeholder="you@example.com"/>
                    <div>
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" placeholder="1234 Main St" required />
                    <div>Please enter your shipping address.</div>
                  </div>

                  <div>
                    <label htmlFor="address2">
                      Address 2 <span>(Optional)</span>
                    </label>
                    <input type="text" id="address2" placeholder="Apartment or suite"/>
                  </div>

                  <div>
                    <div>
                      <label htmlFor="country">Country</label>
                      <select id="country" required>
                        <option value="">Choose...</option>
                        <option>United States</option>
                      </select>
                      <div>Please select a valid country.</div>
                    </div>
                    <div>
                      <label htmlFor="state">State</label>
                      <select id="state" required>
                        <option value="">Choose...</option>
                        <option>California</option>
                      </select>
                      <div>Please provide a valid state.</div>
                    </div>
                    <div>
                      <label htmlFor="zip">Zip</label>
                      <input type="text" id="zip" placeholder="" required />
                      <div>Zip code required.</div>
                    </div>
                  </div>
                  <hr />
                  <div>
                    <input type="checkbox" id="same-address" />
                    <label htmlFor="same-address">
                      Shipping address is the same as my billing address
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" id="save-info" />
                    <label htmlFor="save-info">
                      Save this information for next time
                    </label>
                  </div>
                  <hr />

                  <h4>Payment</h4>

                  <div>
                    <div>
                      <input id="credit" name="paymentMethod" type="radio" defaultChecked required/>
                      <label htmlFor="credit">Credit card</label>
                    </div>
                    <div>
                      <input id="debit" name="paymentMethod" type="radio" required/>
                      <label htmlFor="debit">Debit card</label>
                    </div>
                    <div>
                      <input id="paypal" name="paymentMethod" type="radio" required/>
                      <label htmlFor="paypal">Paypal</label>
                    </div>
                  </div>
                  <div>
                    <div>
                      <label htmlFor="cc-name">Name on card</label>
                      <input type="text" id="cc-name" placeholder="" required />
                      <small>Full name as displayed on card</small>
                      <div>Name on card is required</div>
                    </div>
                    <div>
                      <label htmlFor="cc-number">Credit card number</label>
                      <input type="text" id="cc-number" placeholder="" required/>
                      <div>Credit card number is required</div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <label htmlFor="cc-expiration">Expiration</label>
                      <input type="text" id="cc-expiration" placeholder="" required/>
                      <div>Expiration date required</div>
                    </div>
                    <div>
                      <label htmlFor="cc-cvv">CVV</label>
                      <input type="text" id="cc-cvv" placeholder="" required />
                      <div>Security code required</div>
                    </div>
                  </div>
                  <hr />
                  <button type="submit">Place order</button>
                </form>
              </div>
            </div>
          </div>
          <a href="#">
            <i></i>
          </a>
        </section>
      </main>
    </>
  );
}

export default Checkout;
