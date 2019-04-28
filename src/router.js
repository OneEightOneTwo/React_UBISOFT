import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage/IndexPage';
import GamelistPage from './routes/GamelistPage/GamelistPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/gamelist" exact component={GamelistPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
