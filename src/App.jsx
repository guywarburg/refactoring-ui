import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import WPPusher from './WPPusher';

const RouteLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  margin: 3rem;
`;

const StyledCard = styled.div`
  height: 300px;
  width: 300px;

  border-radius: 5px;

  padding: 1rem;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
`;

function renderCurrentView(store) {
  const view = store.currentView;
  switch (view.name) {
    case 'wppusher':
      return <WPPusher view={view} store={store} />;
    default:
      return <Home view={view} store={store} />;
  }
}

const App = observer(({ store }) => <div>{renderCurrentView(store)}</div>);

const Home = ({ view, store }) => (
  <RouteLayout>
    <StyledCard onClick={store.showWPPusher}>WP Pusher Design</StyledCard>
    <StyledCard>Another Design</StyledCard>
    <StyledCard>Yet Another Design</StyledCard>
  </RouteLayout>
);

export default App;
