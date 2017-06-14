/**
 * @Author: eason
 * @Date:   2017-06-15T00:24:00+08:00
 * @Last modified by:   eason
 * @Last modified time: 2017-06-15T00:30:19+08:00
 */

import React from 'react';
import { Router, Route } from 'dva/router';
import App from './routes/App';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  );
}

export default RouterConfig;
