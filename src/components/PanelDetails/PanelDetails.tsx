import React from 'react';
import styled from 'styled-components';

import CurrentPlan from './CurrentPlan';
import SwitchAccount from './SwitchAccount';
import UserQuote from './UserQuote';

const PlanDetailsLayout = styled.div`
  background: ${props => props.theme.blue300};
  color: white;
  padding: 2rem;
`;

const Separator = styled.div`
  background: ${props => props.theme.blue200};
  opacity: 0.6;
  height: 2px;
  width: 100%;
  margin: 3rem 0;
`;

const PlanDetails = () => {
  return (
    <PlanDetailsLayout>
      <CurrentPlan />
      <SwitchAccount />
      <Separator />
      <UserQuote />
    </PlanDetailsLayout>
  );
};

export default PlanDetails;
