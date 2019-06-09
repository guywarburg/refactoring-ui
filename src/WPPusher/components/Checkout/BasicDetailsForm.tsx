import React, { useState } from 'react';
import styled from 'styled-components';

import { FormSection, Input } from '../../Styles';

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px 30px;
`;

const FullRowLayout = styled.div`
  grid-column: 1 / -1;
`;

interface IBasicDetailsForm {
  updateParent: (a: IBasicDetails) => void;
}
export interface IBasicDetails {
  firstName: string;
  lastName: string;
  email: string;
}

const BasicDetailsForm: React.FunctionComponent<IBasicDetailsForm> = ({
  updateParent
}) => {
  const [basicDetails, updateDetails] = useState<IBasicDetails>({
    firstName: '',
    lastName: '',
    email: ''
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newState = {
      ...basicDetails,
      [name]: value
    };
    updateDetails(newState);
    updateParent(newState);
  };
  return (
    <FormSection title="Your Basic Information" icon="1">
      <GridLayout>
        <Input
          name="firstName"
          type="text"
          label="First Name"
          placeholder="Michelle"
          value={basicDetails.firstName}
          onChange={handleInputChange}
        />
        <Input
          name="lastName"
          type="text"
          label="Last Name"
          placeholder="Levy Warburg"
          value={basicDetails.lastName}
          onChange={handleInputChange}
        />
        <FullRowLayout>
          <Input
            name="email"
            type="text"
            label="E-mail"
            placeholder="michelle@example.com"
            maxWidth="85%"
            value={basicDetails.email}
            onChange={handleInputChange}
          />
        </FullRowLayout>
      </GridLayout>
    </FormSection>
  );
};

export default BasicDetailsForm;
