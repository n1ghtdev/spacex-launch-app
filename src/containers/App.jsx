import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LaunchList from '../views/LaunchList';
import Launch from '../views/Launch';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={LaunchList} />
      <Route exact path="/launch/:id" component={Launch} />
    </Switch>
  );
};

export default App;
