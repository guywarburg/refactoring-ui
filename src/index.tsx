import React from 'react';
import ReactDOM from 'react-dom';

import ViewStore from './Store/ViewStore';
import { simpleFetch } from './Store/fetch';
import startRouter from './Store/Router';

import './index.css';
import App from './App';

const viewStore = new ViewStore(simpleFetch);
startRouter(viewStore);

ReactDOM.render(<App store={viewStore} />, document.getElementById('root'));
