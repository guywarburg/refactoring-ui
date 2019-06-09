import React from 'react';
import styled from 'styled-components';

import { Badge, Buttons } from '../../Styles';
import { NeedHelp } from './NeedHelp';

const CheckoutSubmitLayout = styled.div`
  display: flex;
  flex-direction: column;

  margin: 3rem;
`;

interface ICheckoutSubmit {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const CheckoutSubmit: React.FunctionComponent<ICheckoutSubmit> = ({
  onClick
}) => {
  const { StyledCheckoutButton } = Buttons;
  return (
    <CheckoutSubmitLayout>
      <StyledCheckoutButton onClick={onClick}>
        Buy WP Pusher
      </StyledCheckoutButton>
      <NeedHelp />
      <Badge text="powered by" strongText="stripe" />
    </CheckoutSubmitLayout>
  );
};

export default CheckoutSubmit;
