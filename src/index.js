import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './app.css'
const title = 'Start that shit up!';

ReactDOM.render(
  <>
  <App title={title} />
  
  </>,
  document.getElementById('app')
);

module.hot.accept();