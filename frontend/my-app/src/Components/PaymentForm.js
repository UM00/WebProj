import React, { useState } from 'react';
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Create a payment method using the card information
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(false);
      return;
    }

    // Send the payment method to the server for processing
    try {
      const response = await axios.post('/processPayment', {
        paymentMethodId: paymentMethod.id,
        amount: 1000, // Set the desired amount in the smallest currency unit (e.g., cents)
        currency: 'usd', // Set the currency code (e.g., USD)
        description: 'Payment for Product XYZ', // Set a description for the payment
      });

      if (response.status === 200) {
        setPaymentSuccess(true);
        setPaymentError(null);
      }
    } catch (error) {
      setPaymentError('An error occurred while processing the payment.');
      setPaymentSuccess(false);
    }
  };

  return (
    <div>
      <h2>Payment Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Card Information</label>
          <CardElement className="form-control" options={{ style: { base: { fontSize: '16px' } } }} />
        </div>
        {paymentError && <div className="alert alert-danger">{paymentError}</div>}
        {paymentSuccess && <div className="alert alert-success">Payment processed successfully!</div>}
        <button type="submit" className="btn btn-primary">
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
