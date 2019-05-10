import React from 'react';
import styled from 'styled-components';
import { StyledLabel } from '../Styles/Typography';

const StyledInput = styled.input`
  border: none;
  border-radius: 8px;
  background-color: #edeff2;
  color: #646e7a;
  font-size: 1rem;
  padding: 0.8em 1.5em 0.8em 1em;
  display: block;
  margin-top: 0.6em;
  width: 100%;
  box-sizing: border-box;
`;

export interface IInput {
  type: string;
  name: string;
  placeholder: string;
  label: string;
  maxWidth?: string;
}

const Input: React.FunctionComponent<IInput> = ({
  label,
  maxWidth,
  ...rest
}) => {
  return (
    <StyledLabel maxWidth={maxWidth}>
      {label}
      <StyledInput {...rest} />
    </StyledLabel>
  );
};

export default Input;
