import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './PaymentForm.css'; // Ensure this CSS file path is correct

const stripePromise = loadStripe('your_stripe_publishable_key');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [billingDetails, setBillingDetails] = useState({
    nameOnCard: '',
    address: '',
    country: '',
    zip: ''
  });

  const handleInputChange = (event) => {
    setBillingDetails({
      ...billingDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const paymentMethodReq = {
      type: 'card',
      card: cardElement,
      billing_details: {
        name: billingDetails.nameOnCard,
        address: {
          line1: billingDetails.address,
          country: billingDetails.country,
          postal_code: billingDetails.zip
        },
      },
    };

    const { error, paymentMethod } = await stripe.createPaymentMethod(paymentMethodReq);

    if (error) {
      console.log('[error]', error);
      // Handle error here
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      // Handle successful creation of payment method
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <input
        type="text"
        name="nameOnCard"
        placeholder="Name on Card"
        value={billingDetails.nameOnCard}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={billingDetails.address}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="country"
        placeholder="Country"
        value={billingDetails.country}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="zip"
        placeholder="ZIP / Postal Code"
        value={billingDetails.zip}
        onChange={handleInputChange}
        required
      />
      <CardElement />
      <button type="submit" className="submit-button">Pay</button>
    </form>
  );
};

const PaymentForm = () => {
  return (
    <div className="payment-form-container">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default PaymentForm;
