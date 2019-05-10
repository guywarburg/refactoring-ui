import React from 'react';
import styled from 'styled-components';

import { StyledH2 } from '../../Styles/Typography';

interface ICheckoutHeader {
  title: string;
}

const CheckoutHeaderLayout = styled.div`
  padding: 0 40px;
  border-bottom: #f5f7fa 2px solid;
`;

const CheckoutHeader: React.FunctionComponent<ICheckoutHeader> = ({
  title
}) => (
  <CheckoutHeaderLayout>
    <StyledH2>{title}</StyledH2>
  </CheckoutHeaderLayout>
);

export default CheckoutHeader;
