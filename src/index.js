import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card.js';
import App from './App';
import './style.css'
import './app.css'
const title = 'Start that shit up!';

ReactDOM.render(
  <>
  <App title={title} />
  <Card/>
  </>,
  document.getElementById('app')
);

module.hot.accept();