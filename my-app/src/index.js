import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Required for Redux store setup
import { Provider } from 'react-redux'
import configureStore from './store';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <BrowserRouter>
      <Provider store={configureStore()}>
          <App />
      </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();