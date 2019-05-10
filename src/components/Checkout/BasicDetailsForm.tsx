import React from 'react';
import styled from 'styled-components';

import { FormSection } from './common';
import Input from '../Input';

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px 30px;
`;

const FullRowLayout = styled.div`
  grid-column: 1 / -1;
`;

const BasicDetailsForm = () => (
  <FormSection title="Your Basic Information" icon="1">
    <GridLayout>
      <Input
        name="firstName"
        type="text"
        label="First Name"
        placeholder="Michelle"
      />
      <Input
        name="lastName"
        type="text"
        label="Last Name"
        placeholder="Levy Warburg"
      />
      <FullRowLayout>
        <Input
          name="email"
          type="text"
          label="E-mail"
          placeholder="michelle@example.com"
          maxWidth="85%"
        />
      </FullRowLayout>
    </GridLayout>
  </FormSection>
);

export default BasicDetailsForm;
