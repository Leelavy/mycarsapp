import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getDriverById } from '../api/driversApi';
import { fade } from '../styles/animations';
import ContainedCarCard from '../components/ContainedCarCard';
import Paper from '@material-ui/core/Paper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { convertDate } from '../utils/utils';
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

const DriverDetails = () => {

  const location = useLocation();
  const theme = useTheme();
  const classes = useStyles();
  const driverId = decodeURI(location.pathname.split("/")[2]);
  const [driverDetails, setDriverDetails] = useState({
    name: '',
    email: '',
    birthday: '',
    cars: [],
  });

  useEffect(() => {
    getDriverById(driverId)
      .then(resp => {
        setDriverDetails({
          name: resp.data.data.attributes.name,
          email: resp.data.data.attributes.email,
          birthday: resp.data.data.attributes.date_of_birth,
          cars: resp.data.included,
        });
      })
      .catch(resp => console.log(resp))
  }, []);

  return (
    <StyledContainer
      variants={fade}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {driverDetails.name.length && (
        <>
          <StyledTitleArea>
            <Title color={theme.palette.common.title}>
              DRIVER DETAILS
          </Title>
            <Line color={theme.palette.primary.main} />
          </StyledTitleArea>
          <Paper className={classes.paper}>
            <StyledDataDiv>
              <StyledBlock
                color={theme.palette.common.bullet}>
                <h5>NAME</h5>
                <p>{driverDetails.name}</p>
              </StyledBlock>
              <StyledBlock
                color={theme.palette.common.bullet}>
                <h5>EMAIL</h5>
                <p>{driverDetails.email}</p>
              </StyledBlock>
              <StyledBlock
                color={theme.palette.common.bullet}>
                <h5>BIRTHDAY</h5>
                {driverDetails.birthday.length ?
                  <p>{convertDate(new Date(driverDetails.birthday))}</p> : 'None'}
              </StyledBlock>
            </StyledDataDiv>
          </Paper>
          <SubTitle color={theme.palette.common.title}>
            {driverDetails.cars.length ?
              `CARS THAT ${driverDetails.name.toUpperCase()} CAN DRIVE:` : ''}
          </SubTitle>
          <GridContainer>
            <StyledGrid>
              {driverDetails.cars.length > 0 && driverDetails.cars.map(car => (
                <StyledLink to={`/cars/${car.id}`}>
                  <ContainedCarCard key={car.id} attributes={car.attributes} />
                </StyledLink>
              ))}
            </StyledGrid>
          </GridContainer>
        </>
      )}
    </StyledContainer>
  );
}

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const StyledDataDiv = styled(motion.div)`
width: 100%;
max-width: 1000px;
display: flex;
justify-content: space-between;
align-items: center;
margin-left: 2rem;
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

export default DriverDetails;