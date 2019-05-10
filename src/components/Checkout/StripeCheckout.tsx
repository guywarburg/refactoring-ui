import React from 'react';

import { FormSection } from './common';
import Input from '../Input';

const StripeCheckout = () => (
  <FormSection title="Your Payment Information" icon="2">
    <Input
      name="creditCard"
      type="text"
      label="Credit Card"
      placeholder="Card Number"
    />
  </FormSection>
);

export default StripeCheckout;
