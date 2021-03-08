import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getCarById } from '../api/carsApi';
import { fade } from '../styles/animations';
import ContainedDriverCard from '../components/ContainedDriverCard';
import Paper from '@material-ui/core/Paper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

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

const CarDetails = () => {

  const theme = useTheme();
  const classes = useStyles();
  const location = useLocation();
  const carId = decodeURI(location.pathname.split("/")[2]);
  const [carDetails, setCarDetails] = useState({
    title: '',
    carType: '',
    color: '',
    drivers: [],
  });

  useEffect(() => {
    getCarById(carId)
      .then(resp => {
        setCarDetails({
          title: resp.data.data.attributes.title,
          carType: resp.data.data.attributes.car_type,
          color: resp.data.data.attributes.color,
          drivers: resp.data.included,
        });
      })
      .catch(resp => console.log(resp))
  }, []);

  console.log(carDetails);
  return (
    <StyledContainer
      variants={fade}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {carDetails.title.length > 0 && (
        <>
          <StyledTitleArea>
            <Title color={theme.palette.common.title}>
              CAR DETAILS
            </Title>
            <Line color={theme.palette.primary.main} />
          </StyledTitleArea>
          <Paper className={classes.paper}>
            <StyledDataDiv>
              <StyledBlock
                color={theme.palette.common.bullet}>
                <h5>TITLE</h5>
                <p>{carDetails.title}</p>
              </StyledBlock>
              <StyledBlock
                color={theme.palette.common.bullet}>
                <h5>Car Type</h5>
                <p>{carDetails.carType.length ? carDetails.carType : 'None'}</p>
              </StyledBlock>
              <StyledBlock
                color={theme.palette.common.bullet}>
                <h5>Color</h5>
                <p>{carDetails.color.length ? carDetails.color : 'None'}</p>
              </StyledBlock>
            </StyledDataDiv>
          </Paper>
          <SubTitle color={theme.palette.common.title}>
            {carDetails.drivers.length ?
              `DRIVERS THAT CAN DRIVE ${carDetails.title.toUpperCase()}:` : ''}
          </SubTitle>
          <GridContainer>
            <StyledGrid>
              {carDetails.drivers.length > 0 && (carDetails.drivers.map(driver => (
                <StyledLink to={`/drivers/${driver.id}`}>
                  <ContainedDriverCard key={driver.id} attributes={driver.attributes} />
                </StyledLink>
              )))}
            </StyledGrid>
          </GridContainer>
        </>
      )}
    </StyledContainer>
  );
}

const StyledDataDiv = styled(motion.div)`
width: 100%;
max-width: 1000px;
display: flex;
justify-content: space-between;
align-items: center;
margin-left: 2rem;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const StyledGrid = styled(motion.div)`
  z-index: 1;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(100px, 0.2fr));
  grid-row-gap: 2rem;
`;

const GridContainer = styled(motion.div)`
  width: 100%;
  margin: 2rem 0;
`;

const StyledBlock = styled(motion.div)`
display: flex;
flex-wrap: nowrap;
border-radius: 1rem;
flex-direction: column;
justify-content: center;
align-items: center;
overflow: hidden;
padding: 1rem;
margin: 1rem;
width: 30%;
min-width: 100px;
background-color: ${props => props.color};

h5 {
color: #f57c6e;
font-weight: lighter;
margin-bottom: 0.9rem;
}

p {
color: white;
font-weight: bold;
}
`;

const StyledContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Line = styled(motion.div)`
  width: 40%;
  height: 0.3rem;
  margin: 1rem 0;
  background: ${props => props.color};
`;

const Title = styled.h1`
  color: ${props => props.color};
`;

const SubTitle = styled.h4`
  color: ${props => props.color};
  margin: 2rem 0 0.5rem 0;
`;

const StyledTitleArea = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

export default CarDetails;