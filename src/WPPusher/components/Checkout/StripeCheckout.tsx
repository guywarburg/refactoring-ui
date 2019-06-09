import React, { useState } from 'react';

import { Input, FormSection } from '../../Styles';

interface IStripeCheckout {
  updateParent: (a: string) => void;
}

const StripeCheckout: React.FunctionComponent<IStripeCheckout> = ({
  updateParent
}) => {
  const [stripeDetails, updateStripeDetails] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    updateStripeDetails(value);
    updateParent(value);
  };
  return (
    <FormSection title="Your Payment Information" icon="2">
      <Input
        name="creditCard"
        type="text"
        label="Credit Card"
        placeholder="Card Number"
        onChange={handleInputChange}
        value={stripeDetails}
      />
    </FormSection>
  );
};

export default StripeCheckout;
