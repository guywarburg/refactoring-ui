import React from 'react';
import styled from 'styled-components';

interface IStyledLabel {
  maxWidth?: string;
}
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

const StyledLabel = styled.label<IStyledLabel>`
  font-family: lato, sans-serif;
  display: block;
  color: #1d2c3c;
  font-size: 1rem;
  margin: 1em 0;
  max-width: ${props => props.maxWidth || ''};
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
