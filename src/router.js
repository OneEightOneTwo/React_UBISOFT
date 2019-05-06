import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage/IndexPage';
import GamelistPage from './routes/GamelistPage/GamelistPage';
import HomePage from './routes/HomePage/HomePage';
import Particulars from './routes/Particulars/Particulars';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/gamelist" exact component={GamelistPage} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/par" exact component={Particulars} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
