import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Reset from './style/generic/Reset';
import Base from './style/elements/Base';


ReactDOM.render(
  <React.StrictMode>
    <Reset/>
    <Base/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
