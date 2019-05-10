import styled from 'styled-components';

const StyledCard = styled.div`
  min-width: 50vw;
  max-width: 890px;
  margin: auto;

  background: ${props => props.theme.white};
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.0490829),
    0px 15px 35px rgba(43, 64, 78, 0.095505);
  border-radius: 6px;
  overflow: hidden;

  display: grid;
  grid-template-columns: 2fr 1fr;
`;

export default StyledCard;
