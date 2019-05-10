import React from 'react';
import styled from 'styled-components';

import IconCircle from '../IconCircle';
import theme from '../../Styles/Theme';

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 2rem;
  list-style-type: none;
`;

interface IBulletList {
  bullets: IBulletItem[];
}

const BulletList: React.FunctionComponent<IBulletList> = ({ bullets }) => {
  return (
    <StyledList>
      {bullets.map((item: IBulletItem) => (
        <BulletItem name={item.name} />
      ))}
    </StyledList>
  );
};

export default BulletList;

interface IBulletItem {
  name: string;
}

const StyledItem = styled.li`
  display: flex;
  margin: 1rem 0;
  align-items: center;
`;

const BulletItem: React.FunctionComponent<IBulletItem> = ({ name }) => (
  <StyledItem>
    <IconCircle text="v" weight="bold" size="0.7rem" color={theme.blue100} />{' '}
    {name}
  </StyledItem>
);
