import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { motion } from 'framer-motion';
import CarCard from '../components/CarCard';
import AddButton from '../components/AddButton';
import { Link } from 'react-router-dom';
import { getAllCars } from '../api/carsApi';
import { fade } from '../styles/animations';

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

const Cars = () => {

  const theme = useTheme();
  const classes = useStyles();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getAllCars()
      .then(resp => setCars(resp.data.data.reverse()))
      .catch(resp => console.log(resp))
  }, [])

  return (
    <StyledContainer
      variants={fade}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {cars && (
        <Paper className={classes.paper}>
          <StyledTitleArea>
            <Title color={theme.palette.common.title}>
              CARS
            </Title>
            <Line color={theme.palette.primary.main} />
            <StyledLink to={`/newcar`}>
              <AddButton label="Add new car" />
            </StyledLink >
          </StyledTitleArea>
          <GridContainer>
            <StyledGrid>
              {cars.length > 0 &&
                cars.map(car =>
                  <CarCard car={car} key={car.id} />
                )}
            </StyledGrid>
          </GridContainer>
        </Paper>
      )}
    </StyledContainer>
  );
}

const StyledContainer = styled(motion.div)`
  width: 100%;
`;

const StyledGrid = styled(motion.div)`
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

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const Title = styled.h1`
  color: ${props => props.color};
`;

const StyledTitleArea = styled(motion.div)`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

export default Cars;
