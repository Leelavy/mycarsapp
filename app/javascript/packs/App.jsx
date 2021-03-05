import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Drivers from '../pages/Drivers';
import Cars from '../pages/Cars';

const App = () => {

  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cars" component={Cars} />
        <Route exact path="/drivers" component={Drivers} />
      </Switch>
    </HashRouter>
  );
}

export default App;
