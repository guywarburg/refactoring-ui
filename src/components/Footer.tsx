import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  margin-top: 1.875rem;
  text-align: center;
  color: #636b6f;
  font-weight: 300;
  font-size: 1rem;
`;

const Footer: React.FunctionComponent = () => {
  return <StyledFooter>© 2018 WP Pusher IVS · Terms of Service</StyledFooter>;
};

export default Footer;
