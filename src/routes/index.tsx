import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Pick from '../pages/Pick';
import Dashboard from '../pages/Dashboard';
import NewPick from '../pages/Pick/New';
import Error404 from '../pages/404';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/pick/:id" exact component={Pick} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/new" component={NewPick} isPrivate />

    <Route component={Error404} />
  </Switch>
);

export default Routes;
