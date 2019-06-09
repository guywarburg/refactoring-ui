import React from 'react';

import { StyledQuote } from '../../Styles/Typography';
import { Avatar } from '../../Styles';

const UserQuote = () => (
  <React.Fragment>
    <StyledQuote>
      FTP is horrible to deal with. <strong>WP Pusher</strong> solves that
      issue, and the customer support is awesome!
    </StyledQuote>
    <Avatar />
  </React.Fragment>
);

export default UserQuote;
