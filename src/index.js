import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { unregister } from './registerServiceWorker';

import 'animate.css/animate.min.css';

import './assets/css/main.css';
import './assets/css/custom.css';

import Pages from './layouts/Pages';

ReactDOM.render(
  <BrowserRouter>
    <Pages />
  </BrowserRouter>,
  document.getElementById('root')
);
unregister();
