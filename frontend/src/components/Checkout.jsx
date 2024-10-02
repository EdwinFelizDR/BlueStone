import React, { useState } from "react";
import "../css/Checkout.css";
import { jsPDF } from "jspdf";

function Checkout() {
  const [sameAsBilling, setSameAsBilling] = useState(true); // State to track checkbox
  const [billingAddress, setBillingAddress] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    address: "",
    address2: "",
    country: "",
    state: "",
    zip: "",
  }); // State for billing address

  const [shippingAddress, setShippingAddress] = useState({
    address: "",
    address2: "",
    country: "",
    state: "",
    zip: "",
  }); // State for shipping address

  const [paymentDetails, setPaymentDetails] = useState({
    nameOnCard: "",
    cardNumber: "",
    expiration: "",
    cvv: "",
  }); // State for payment details

  const [errors, setErrors] = useState({}); // State to track errors

  // Handle billing address changes
  const handleBillingChange = (e) => {
    setBillingAddress({
      ...billingAddress,
      [e.target.id]: e.target.value,
    });
  };

  // Handle shipping address changes
  const handleShippingChange = (e) => {
    setShippingAddress({
      ...shippingAddress,
      [e.target.id]: e.target.value,
    });
  };

  // Handle payment details changes
  const handlePaymentChange = (e) => {
    setPaymentDetails({
      ...paymentDetails,
      [e.target.id]: e.target.value,
    });
  };

  // Toggle shipping address visibility
  const handleSameAsBillingToggle = () => {
    setSameAsBilling(!sameAsBilling);
    if (sameAsBilling) {
      // Clear shipping address when the checkbox is unchecked
      setShippingAddress({
        address: "",
        address2: "",
        country: "",
        state: "",
        zip: "",
      });
    }
  };

  // Form validation logic
  const validateForm = () => {
    const newErrors = {};

    // Validate billing address
    if (!billingAddress.firstName) newErrors.firstName = "First name is required.";
    if (!billingAddress.lastName) newErrors.lastName = "Last name is required.";
    if (!billingAddress.username) newErrors.username = "Username is required.";
    if (!billingAddress.email || !/\S+@\S+\.\S+/.test(billingAddress.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!billingAddress.address) newErrors.address = "Billing address is required.";
    if (!billingAddress.country) newErrors.country = "Please select a country.";
    if (!billingAddress.state) newErrors.state = "Please select a state.";
    if (!billingAddress.zip) newErrors.zip = "Zip code is required.";

    // If shipping address is not the same as billing, validate the shipping fields
    if (!sameAsBilling) {
      if (!shippingAddress.address) newErrors.shippingAddress = "Shipping address is required.";
      if (!shippingAddress.country) newErrors.shippingCountry = "Please select a shipping country.";
      if (!shippingAddress.state) newErrors.shippingState = "Please select a shipping state.";
      if (!shippingAddress.zip) newErrors.shippingZip = "Shipping zip code is required.";
    }

    // Validate payment details
    if (!paymentDetails.nameOnCard) newErrors.nameOnCard = "Name on card is required.";
    if (!paymentDetails.cardNumber || paymentDetails.cardNumber.length < 16) {
      newErrors.cardNumber = "Valid credit card number is required.";
    }
    if (!paymentDetails.expiration) newErrors.expiration = "Expiration date is required.";
    if (!paymentDetails.cvv || paymentDetails.cvv.length !== 3) {
      newErrors.cvv = "Security code (CVV) is required.";
    }

    return newErrors;
  };

    // Generate PDF with order details
    const generatePDF = () => {
      const doc = new jsPDF();
      
      // Add content to the PDF
      doc.text("Order Receipt", 10, 10);
      doc.text(`Name: ${billingAddress.firstName} ${billingAddress.lastName}`, 10, 20);
      doc.text(`Email: ${billingAddress.email}`, 10, 30);
      doc.text(`Billing Address: ${billingAddress.address}, ${billingAddress.state}, ${billingAddress.zip}`, 10, 40);
  
      if (!sameAsBilling) {
        doc.text(`Shipping Address: ${shippingAddress.address}, ${shippingAddress.state}, ${shippingAddress.zip}`, 10, 50);
      }
  
      doc.text(`Payment: ${paymentDetails.cardNumber.replace(/\d(?=\d{4})/g, "*")}`, 10, 60);
      doc.text(`Name on Card: ${paymentDetails.nameOnCard}`, 10, 70);
  
      // Save the PDF
      doc.save("order-receipt.pdf");
    };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // Submit the form or handle submission logic here
      alert("Order submitted successfully!");
      generatePDF(); // Call function to generate and download PDF
    }
  };

  return (
    <main id="main" role="main" className="container">
      <section id="checkout-container" className="section">
        <h4>Billing address</h4>
        <form onSubmit={handleSubmit} noValidate>
          {/* Billing Address Fields */}
          <div className="form-group">
            <label htmlFor="firstName" className="label">First name</label>
            <input
              type="text"
              id="firstName"
              className="input"
              value={billingAddress.firstName}
              onChange={handleBillingChange}
              required
            />
            {errors.firstName && <div className="error-message">{errors.firstName}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="lastName" className="label">Last name</label>
            <input
              type="text"
              id="lastName"
              className="input"
              value={billingAddress.lastName}
              onChange={handleBillingChange}
              required
            />
            {errors.lastName && <div className="error-message">{errors.lastName}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="label">Email <span>(Required)</span></label>
            <input
              type="email"
              id="email"
              className="input"
              value={billingAddress.email}
              onChange={handleBillingChange}
              required
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="address" className="label">Address</label>
            <input
              type="text"
              id="address"
              className="input"
              value={billingAddress.address}
              onChange={handleBillingChange}
              required
            />
            {errors.address && <div className="error-message">{errors.address}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="country" className="label">Country</label>
            <select
              id="country"
              className="input"
              value={billingAddress.country}
              onChange={handleBillingChange}
              required
            >
              <option value="">Choose...</option>
              <option>United States</option>
            </select>
            {errors.country && <div className="error-message">{errors.country}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="state" className="label">State</label>
            <select
              id="state"
              className="input"
              value={billingAddress.state}
              onChange={handleBillingChange}
              required
            >
              <option value="">Choose...</option>
              <option>California</option>
              <option>New York</option>
            </select>
            {errors.state && <div className="error-message">{errors.state}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="zip" className="label">Zip</label>
            <input
              type="text"
              id="zip"
              className="input"
              value={billingAddress.zip}
              onChange={handleBillingChange}
              required
            />
            {errors.zip && <div className="error-message">{errors.zip}</div>}
          </div>

          {/* Same as Billing Checkbox */}
          <div className="form-group">
            <input
              type="checkbox"
              id="same-address"
              checked={sameAsBilling}
              onChange={handleSameAsBillingToggle}
            />
            <label htmlFor="same-address">
              Shipping address is the same as my billing address
            </label>
          </div>

          {/* Conditional Shipping Address Fields */}
          {!sameAsBilling && (
            <>
              <h4>Shipping Address</h4>

              <div className="form-group">
                <label htmlFor="shippingAddress" className="label">Address</label>
                <input
                  type="text"
                  id="address"
                  className="input"
                  value={shippingAddress.address}
                  onChange={handleShippingChange}
                  required
                />
                {errors.shippingAddress && <div className="error-message">{errors.shippingAddress}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="shippingCountry" className="label">Country</label>
                <select
                  id="country"
                  className="input"
                  value={shippingAddress.country}
                  onChange={handleShippingChange}
                  required
                >
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select>
                {errors.shippingCountry && <div className="error-message">{errors.shippingCountry}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="shippingState" className="label">State</label>
                <select
                  id="state"
                  className="input"
                  value={shippingAddress.state}
                  onChange={handleShippingChange}
                  required
                >
                  <option value="">Choose...</option>
                  <option>California</option>
                </select>
                {errors.shippingState && <div className="error-message">{errors.shippingState}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="shippingZip" className="label">Zip</label>
                <input
                  type="text"
                  id="zip"
                  className="input"
                  value={shippingAddress.zip}
                  onChange={handleShippingChange}
                  required
                />
                {errors.shippingZip && <div className="error-message">{errors.shippingZip}</div>}
              </div>
            </>
          )}

          {/* Payment Information */}
          <h4>Payment</h4>

          <div className="form-group">
            <label htmlFor="nameOnCard" className="label">Name on card</label>
            <input
              type="text"
              id="nameOnCard"
              className="input"
              value={paymentDetails.nameOnCard}
              onChange={handlePaymentChange}
              required
            />
            {errors.nameOnCard && <div className="error-message">{errors.nameOnCard}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="cardNumber" className="label">Credit card number</label>
            <input
              type="text"
              id="cardNumber"
              className="input"
              value={paymentDetails.cardNumber}
              onChange={handlePaymentChange}
              required
            />
            {errors.cardNumber && <div className="error-message">{errors.cardNumber}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="expiration" className="label">Expiration</label>
            <input
              type="text"
              id="expiration"
              className="input"
              value={paymentDetails.expiration}
              onChange={handlePaymentChange}
              required
            />
            {errors.expiration && <div className="error-message">{errors.expiration}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="cvv" className="label">CVV</label>
            <input
              type="text"
              id="cvv"
              className="input"
              value={paymentDetails.cvv}
              onChange={handlePaymentChange}
              required
            />
            {errors.cvv && <div className="error-message">{errors.cvv}</div>}
          </div>

          <button type="submit" className="button">
            Place order
          </button>
        </form>
      </section>
    </main>
  );
}

export default Checkout;
