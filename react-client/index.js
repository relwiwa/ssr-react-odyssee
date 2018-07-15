import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import SSROdysee from './components/SSROdyssee';

ReactDOM.render(
  <BrowserRouter>
    <SSROdysee/>
  </BrowserRouter>,
  document.getElementById('root')
);
