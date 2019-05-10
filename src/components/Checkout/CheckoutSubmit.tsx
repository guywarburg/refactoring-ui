import React from 'react';
import styled from 'styled-components';

import { StyledCheckoutButton } from '../../Styles/Buttons';
import { Badge, NeedHelp } from './common';

const CheckoutSubmitLayout = styled.div`
  display: flex;
  flex-direction: column;

  margin: 3rem;
`;

const CheckoutSubmit = () => {
  return (
    <CheckoutSubmitLayout>
      <StyledCheckoutButton>Buy WP Pusher</StyledCheckoutButton>
      <NeedHelp />
      <Badge text="powered by" strongText="stripe" />
    </CheckoutSubmitLayout>
  );
};

export default CheckoutSubmit;
