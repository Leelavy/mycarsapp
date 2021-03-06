import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import GlobalStyles from '../styles/GlobalStyles';
import themeProps from '../styles/theme';
import Home from '../pages/Home';
import Drivers from '../pages/Drivers';
import Cars from '../pages/Cars';

const App = () => {

  const appTheme = createMuiTheme(themeProps);

  return (
    <ThemeProvider theme={appTheme}>
      <HashRouter basename="/">
        <GlobalStyles theme={appTheme} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cars" component={Cars} />
          <Route exact path="/drivers" component={Drivers} />
        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
