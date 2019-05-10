import React, { Component } from 'react';
import styled from 'styled-components';

import Card from '../Styles/Card';

import Checkout from './Checkout/Checkout';
import PlanDetails from './PanelDetails/PanelDetails';

const BodyLayout = styled.div`
  display: flex;
  padding-top: 85px;
`;

class Body extends Component {
  render() {
    return (
      <BodyLayout>
        <Card>
          <Checkout />
          <PlanDetails />
        </Card>
      </BodyLayout>
    );
  }
}

export default Body;
