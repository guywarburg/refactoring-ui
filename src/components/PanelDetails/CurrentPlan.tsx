import React from 'react';

import { StyledH3, StyledItalics } from '../../Styles/Typography';

import PriceDisplay from './PriceDisplay';
import BulletList from './BulletList';

const CurrentPlan = () => {
  const bullets = [
    {
      name: 'Use on 5 client sites'
    },
    {
      name: 'Private repositories'
    },
    {
      name: 'Email support'
    }
  ];
  return (
    <div>
      <StyledH3>Freelancer</StyledH3>
      <PriceDisplay price="99" />
      <StyledItalics>Automatically renews after 1 year</StyledItalics>
      <BulletList bullets={bullets} />
    </div>
  );
};

export default CurrentPlan;
