import React from 'react';

import CheckoutHeader from './CheckoutHeader';
import BasicDetailsForm from './BasicDetailsForm';
import StripeCheckout from './StripeCheckout';
import CheckoutSubmit from './CheckoutSubmit';

const Checkout = () => {
  return (
    <div>
      <CheckoutHeader title="Checkout" />
      <BasicDetailsForm />
      <StripeCheckout />
      <CheckoutSubmit />
    </div>
  );
};
export default Checkout;
