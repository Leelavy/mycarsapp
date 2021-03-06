import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import styled from 'styled-components';
import { motion } from 'framer-motion'
import GlobalStyles from '../styles/GlobalStyles';
import themeProps from '../styles/theme';
import NavBar from '../components/NavBar';
import Home from '../pages/Home';
import Drivers from '../pages/Drivers';
import Cars from '../pages/Cars';
import CarDetails from '../pages/CarDetails';
import DriverDetails from '../pages/DriverDetails';

const App = () => {

  const appTheme = createMuiTheme(themeProps);

  return (
    <ThemeProvider theme={appTheme}>
      <HashRouter basename="/">
        <GlobalStyles theme={appTheme} />
        <NavBar />
        <Switch>
          <StyledContainer>
            <StyledContent>
              <Route exact path="/" component={Home} />
              <Route exact path="/cars" component={Cars} />
              <Route exact path="/drivers" component={Drivers} />
              <Route exact path="/cars/:carId" component={CarDetails} />
              <Route exact path="/drivers/:driverId" component={DriverDetails} />
            </StyledContent>
          </StyledContainer>
        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
}

const StyledContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;

const StyledContent = styled(motion.div)`
  width: 80%;
  display: flex;
  justify-content: center;
`;

export default App;
