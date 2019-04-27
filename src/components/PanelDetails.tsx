import React from 'react';
import styled from 'styled-components';
import IconCircle from './IconCircle';

const StyledPlanDetails = styled.div`
  background: #31708f;
  color: white;
  padding: 2rem;
`;

const StyledTitle = styled.h3`
  margin: 0;
`;

const StyledItalics = styled.p`
  font-style: italic;
  font-weight: 200;
  max-width: 10rem;
`;

const StyleParagraph = styled.p`
  margin: 2rem 0 1rem 0;
`;

const Separator = styled.div`
  background: #5a8da5;
  opacity: 0.6;
  height: 2px;
  width: 100%;
  margin: 3rem 0;
`;

const PlanDetails = () => (
  <StyledPlanDetails>
    <StyledTitle>Freelancer</StyledTitle>
    <PriceComponent price="99" />
    <StyledItalics>Automatically renews after 1 year</StyledItalics>
    <BulletList />
    <StyleParagraph>
      Need <strong>20</strong> client sites?
    </StyleParagraph>
    <SwitchAccount />
    <Separator />
    <Quote />
    <Avatar />
  </StyledPlanDetails>
);

export default PlanDetails;

interface IPrice {
  price: string;
}

const StyledPrice = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-template-rows: auto auto;

  /* justify-content: center;
  align-items: center;
  text-align: center; */
  strong {
    margin: 0;
    padding-top: 10px;
    margin-right: 5px;
  }
  span {
    grid-row: 1/-1;
    grid-column: 2/3;
    font-size: 3rem;
    font-weight: 300;
  }
  label {
    grid-row: 2/-1;
    grid-column: 3/4;
    padding-bottom: 10px;
  }
`;

const PriceComponent: React.FunctionComponent<IPrice> = ({ price }) => (
  <StyledPrice>
    <strong>$</strong>
    <span>{price}</span>
    <label>/ year</label>
  </StyledPrice>
);

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 2rem;
  list-style-type: none;
`;

const BulletList: React.FunctionComponent = () => {
  const bullets = [
    'Use on 5 client sites',
    'Private repositories',
    'Email support'
  ];
  return (
    <StyledList>
      {bullets.map(item => (
        <BulletItem item={item} />
      ))}
    </StyledList>
  );
};

interface IBulletItem {
  item: string;
}

const StyledItem = styled.li`
  display: flex;
  margin: 1rem 0;
  align-items: center;
`;

const BulletItem: React.FunctionComponent<IBulletItem> = ({ item }) => (
  <StyledItem>
    <IconCircle text="v" weight="bold" size="0.7rem" color="#B9F5FF" /> {item}
  </StyledItem>
);

const StyledBoldItalic = styled.span`
  font-weight: bold;
  font-style: italic;
`;

const StyledLink = styled.p`
  font-weight: bold;
  display: inline-block;
  margin: 0;
  &:after {
    content: '';
    display: block;
    width: 100%;
    border-bottom: 4px solid rgb(185, 245, 255);
    position: relative;
    top: -2px;
    opacity: 0.7;
  }
`;

const SwitchAccount: React.FunctionComponent = () => (
  <StyledLink>
    Switch to <StyledBoldItalic>Agency</StyledBoldItalic> plan
  </StyledLink>
);

const StyleQuote = styled.blockquote`
  margin: 1rem 0;
  padding: 0;
  font-style: italic;
  font-size: 1.2rem;
`;

const Quote: React.FunctionComponent = () => (
  <StyleQuote>
    FTP is horrible to deal with. <strong>WP Pusher</strong> solves that issue,
    and the customer support is awesome!
  </StyleQuote>
);

const StyleAvatar = styled.div`
  display: flex;
  align-items: center;
`;

const StyledPic = styled.div`
  background: #a0a0a0;
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  margin-right: 1rem;
`;

const Avatar: React.FunctionComponent = () => (
  <StyleAvatar>
    <StyledPic />
    <span>Kirk Beard</span>
  </StyleAvatar>
);
