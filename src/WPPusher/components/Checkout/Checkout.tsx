import React, { useState } from 'react';

import CheckoutHeader from './CheckoutHeader';
import BasicDetailsForm, { IBasicDetails } from './BasicDetailsForm';
import StripeCheckout from './StripeCheckout';
import CheckoutSubmit from './CheckoutSubmit';

interface ICheckoutInfo {
  basicDetails: IBasicDetails;
  stripeDetails: string;
}

const Checkout = () => {
  const initialCheckoutState = {
    basicDetails: {
      firstName: '',
      lastName: '',
      email: ''
    },
    stripeDetails: ''
  };

  const [checkoutInfo, updateCheckoutInfo] = useState<ICheckoutInfo>(
    initialCheckoutState
  );

  const handleChildChange = (
    newState: IBasicDetails | string,
    childName: string
  ) => {
    updateCheckoutInfo({
      ...checkoutInfo,
      [childName]: newState
    });
  };
  return (
    <div>
      <CheckoutHeader title="Checkout" />
      <BasicDetailsForm
        updateParent={(newState: IBasicDetails) =>
          handleChildChange(newState, 'basicDetails')
        }
      />
      <StripeCheckout
        updateParent={(newState: string) =>
          handleChildChange(newState, 'stripeDetails')
        }
      />
      <CheckoutSubmit onClick={() => console.log('state', checkoutInfo)} />
    </div>
  );
};
export default Checkout;
