import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../Homepage/Loadable';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    );
  }
}

export default App;
