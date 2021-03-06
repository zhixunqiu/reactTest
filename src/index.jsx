import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { syncHistoryWithStore } from 'mobx-react-router';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './router/index';
import stores from './store';
import './components/config.js';

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, stores.routing);

ReactDOM.render(
  <Provider {...stores}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
