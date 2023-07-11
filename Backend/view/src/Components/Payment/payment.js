import React from 'react';
import { useLocation } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import './payment.css';

const Payment = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const planName = searchParams.get('planName');
  const planPrice = searchParams.get('planPrice');

  const onToken = (token) => {
    // Handle the token and payment logic
  };

  const amountInCents = planPrice * 100; // Convert planPrice to cents

  return (
    <div className="centered-stripe-card">
      <StripeCheckout
        token={onToken}
        stripeKey="pk_test_51NO3gASIecd9FjmOnTYeQRex3lxjFZHVEhnmsRXAWzTS02iaDEzEXpsJsHBndjjEZQolWui1mYvo28VcefWK9ozL00FEO4PDt2"
        name={planName}
        currency="Inr"
        amount={amountInCents}
      />
    </div>
  );
};

export default Payment;
