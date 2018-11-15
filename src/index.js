import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

/* const App = () => (<div>Hello world!</div>); */

render((<BrowserRouter><App /></BrowserRouter>), document.querySelector('#app'));