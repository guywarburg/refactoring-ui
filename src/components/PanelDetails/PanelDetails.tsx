import React from 'react';
import styled from 'styled-components';

import CurrentPlan from './CurrentPlan';
import SwitchAccount from './SwitchAccount';
import UserQuote from './UserQuote';
import { IBulletList } from './BulletList';

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

interface IPlanDetails {
  currentPlan: ICurrentPlan;
  nextPlan: INextPlan;
}
export interface ICurrentPlan extends IBulletList {
  name: string;
  price: number;
}

export interface INextPlan {
  name: string;
  amountOfClients: number;
}

const PlanDetails: React.FunctionComponent = () => {
  const planDetails: IPlanDetails = {
    currentPlan: {
      name: 'Freelancer',
      price: 99,
      bullets: [
        {
          name: 'Use on 5 client sites'
        },
        {
          name: 'Private repositories'
        },
        {
          name: 'Email support'
        }
      ]
    },
    nextPlan: {
      amountOfClients: 20,
      name: 'Agency'
    }
  };
  const handleAccountSwitch = () => {
    // todo
  };
  const { currentPlan, nextPlan } = planDetails;
  return (
    <PlanDetailsLayout>
      <CurrentPlan {...currentPlan} />
      <SwitchAccount {...nextPlan} onClick={handleAccountSwitch} />
      <Separator />
      <UserQuote />
    </PlanDetailsLayout>
  );
};

export default PlanDetails;
