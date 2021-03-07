import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { motion } from 'framer-motion';
import DriverCard from '../components/DriverCard';
import AddButton from '../components/AddButton';
import { Link } from 'react-router-dom';
import { getAllDrivers } from '../api/driversApi';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 0,
    boxShadow: 'none',
    width: '100%',
    background: 'none',
  },
}));

const Drivers = () => {

  const theme = useTheme();
  const classes = useStyles();
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    getAllDrivers()
      .then(resp => {
        setDrivers(resp.data.data)
      })
      .catch(resp => console.log(resp))
  }, [])

  return (
    <StyledContainer
    //adnimation...
    >
      <Paper className={classes.paper}>
        <StyledTitleArea>
          <h1>DRIVERS</h1>
          <Line color={theme.palette.secondary.main} />
          <StyledLink to={`/newdriver`}>
            <AddButton label="Add new driver" />
          </StyledLink >
        </StyledTitleArea>
        <GridContainer>
          <StyledCarsGrid>
            {drivers.length > 0 &&
              drivers.map(driver =>
                <DriverCard driver={driver} key={driver.id} />
              )}
          </StyledCarsGrid>
        </GridContainer>
      </Paper>
    </StyledContainer>

  );
}

const StyledContainer = styled(motion.div)`
  width: 100%;
`;

const StyledCarsGrid = styled(motion.div)`
  z-index: 1;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(200px, 0.2fr));
  grid-row-gap: 2rem;
`;

const GridContainer = styled(motion.div)`
  width: 100%;
  margin: 2rem 0;
`;

const Line = styled(motion.div)`
  width: 40%;
  height: 0.3rem;
  margin: 1rem 0;
  background: ${props => props.color};
`;

const StyledTitleArea = styled(motion.div)`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export default Drivers;