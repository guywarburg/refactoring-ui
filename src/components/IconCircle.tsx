import React from 'react';
import styled from 'styled-components';

const StyledIconCircle = styled.span<IIconCircleStyles>`
  position: relative;
  left: 0.5em;
  color: ${props => props.color || '#548bc5'};
  font-size: ${props => props.size || '1rem'};
  font-weight: ${props => props.weight || 'regular'};
  margin-right: 1.8rem;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: -0.4em;
    left: -0.75em;
    height: 1.7em;
    width: 1.7em;
    border: 2px solid ${props => props.color || '#548bc5'};
    border-radius: 50%;
  }
`;

export interface IIconCircle {
  text: string;
  size?: string;
  weight?: string;
  color?: string;
}
export interface IIconCircleStyles {
  size?: string;
  weight?: string;
  color?: string;
}

const IconCircle: React.FunctionComponent<IIconCircle> = props => {
  return (
    <StyledIconCircle
      size={props.size}
      weight={props.weight}
      color={props.color}
    >
      {props.text}
    </StyledIconCircle>
  );
};

export default IconCircle;
