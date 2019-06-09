import styled from 'styled-components';

const StyledPrimaryButton = styled.button`
  border: 2px solid #646e7a;
  color: #1d2c3c;
  height: 40px;
  border-radius: 3px;
  background: transparent;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  padding: 0 1.1rem;
  &:hover {
    opacity: 0.6;
  }
`;

const StyledSecondaryButton = styled.button`
  border: none;
  background: transparent;
  height: auto;
  font-weight: bold;
  font-size: 1rem;
  padding: 0 1.2rem;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;
const StyledCheckoutButton = styled.button`
  background-color: ${props => props.theme.green};
  color: white;
  text-align: center;
  border-radius: 0.3rem;
  padding: 0.8em 1.5rem;
  font-weight: bold;
  font-size: 1.125rem;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;
export { StyledPrimaryButton, StyledSecondaryButton, StyledCheckoutButton };
