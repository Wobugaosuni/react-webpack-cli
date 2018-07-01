import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from '../containers/home';
import Todo from '../containers/todo';

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/todo" component={Todo} />
        </Switch>
      </Router>
    );
  }
}
