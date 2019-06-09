import React from 'react';
import styled from 'styled-components';

interface IPriceDisplay {
  price: number;
}

const PriceLayout = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-template-rows: auto auto;

  strong {
    margin: 0;
    padding-top: 10px;
    margin-right: 5px;
  }
  span {
    grid-row: 1/-1;
    grid-column: 2/3;
    font-size: 3rem;
    font-weight: 300;
  }
  label {
    grid-row: 2/-1;
    grid-column: 3/4;
    padding-bottom: 10px;
  }
`;

const PriceDisplay: React.FunctionComponent<IPriceDisplay> = ({ price }) => (
  <PriceLayout>
    <strong>$</strong>
    <span>{price}</span>
    <label>/ year</label>
  </PriceLayout>
);

export default PriceDisplay;
