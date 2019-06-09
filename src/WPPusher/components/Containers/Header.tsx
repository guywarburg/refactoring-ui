import React from 'react';
import styled from 'styled-components';

import {
  StyledPrimaryButton,
  StyledSecondaryButton
} from '../../Styles/Buttons';

const HeaderLayout = styled.div`
  height: 73px;
  width: 100%;
  border-bottom: 2px solid ${props => props.theme.grey200};

  display: flex;
  align-items: center;
  .logo {
    flex: 1;
  }
`;

interface IRoute {
  label: string;
  url: string;
}

const ROUTES: IRoute[] = [
  {
    label: 'Download',
    url: '/download'
  },
  {
    label: 'Learn More',
    url: '/learn-more'
  },
  {
    label: 'Pricing',
    url: '/pricing'
  },
  {
    label: 'Help',
    url: '/help'
  }
];

const Header = () => {
  const navigate = (route: IRoute) => {
    window.alert(`clicked route ${route.label}`);
  };
  const login = () => {
    window.alert(`login`);
  };
  return (
    <HeaderLayout>
      <div className="logo">WP PUSHER</div>
      {ROUTES.map(route => (
        <StyledSecondaryButton onClick={() => navigate(route)}>
          {route.label}
        </StyledSecondaryButton>
      ))}
      <StyledPrimaryButton onClick={login}>Account</StyledPrimaryButton>
    </HeaderLayout>
  );
};

export default Header;
