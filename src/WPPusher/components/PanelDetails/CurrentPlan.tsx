import React from 'react';

import { StyledH3, StyledItalics } from '../../Styles/Typography';

import PriceDisplay from './PriceDisplay';
import BulletList from '../../Styles/BulletList';
import { ICurrentPlan } from './PanelDetails';

const CurrentPlan: React.FunctionComponent<ICurrentPlan> = ({
  name,
  price,
  bullets
}) => {
  return (
    <div>
      <StyledH3>{name}</StyledH3>
      <PriceDisplay price={price} />
      <StyledItalics>Automatically renews after 1 year</StyledItalics>
      <BulletList bullets={bullets} />
    </div>
  );
};

export default CurrentPlan;
