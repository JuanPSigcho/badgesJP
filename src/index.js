import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';

//import './global.css';
import Badge from './components/Badge';
import BadgeNew from './pages/BadgeNews';

const container = document.getElementById('app');
ReactDOM.render(
  <BadgeNew />,
  //   firstName='Juan Pablo'
  //   lastName='Sigcho'
  //   jobTitle='FrontEnd Developer Senior'
  //   twitter='@juanpsyar'
  //   meeting='#platziconf '
  // />,
  container
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
