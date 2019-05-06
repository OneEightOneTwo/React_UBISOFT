import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage/IndexPage';
import GamelistPage from './routes/GamelistPage/GamelistPage';
import HomePage from './routes/HomePage/HomePage';
import Particulars from './routes/Particulars/Particulars';

import CarPage from './routes/CarPage/CarPage';

import './assets/css/base.css';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/gamelist" exact component={GamelistPage} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/par" exact component={Particulars} />
        <Route path="/car" exact component={CarPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
