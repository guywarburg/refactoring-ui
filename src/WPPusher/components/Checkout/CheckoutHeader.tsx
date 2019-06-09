import React from 'react';
import styled from 'styled-components';

import { Typography } from '../../Styles';

interface ICheckoutHeader {
  title: string;
}

const CheckoutHeaderLayout = styled.div`
  padding: 0 40px;
  border-bottom: #f5f7fa 2px solid;
`;

const CheckoutHeader: React.FunctionComponent<ICheckoutHeader> = ({
  title
}) => {
  const { StyledH2 } = Typography;
  return (
    <CheckoutHeaderLayout>
      <StyledH2>{title}</StyledH2>
    </CheckoutHeaderLayout>
  );
};

export default CheckoutHeader;
