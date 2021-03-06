import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    position: 'absolute',
    borderRadius: '50%',
    right: 10,
    top: 10,
  },
  paper: {
    display: 'flex',
    boxShadow: 'none',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '200px',
    borderRadius: '1rem',
    background: theme.palette.common.card,
    padding: '1rem',
    cursor: 'pointer',
    transition: 'transform .4s',
    position: 'relative',
    opacity: '0.9',
    width: '100%',
    '&:hover': {
      opacity: 1,
      cursor: 'pointer',
      transform: 'scale(0.98)',
    }
  }
}));

const DriverCard = () => {

  const classes = useStyles();

  return (
    //should put here drivers's id
    <StyledLink to={`/drivers/${1}`}>
      <Paper className={classes.paper}>
        <StyledCityName>Driver</StyledCityName>
        <StyledCountryName>Name</StyledCountryName>
        <Degrees>something</Degrees>
        <WeatherText>lalala</WeatherText>
      </Paper>
    </StyledLink >
  );
}

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const WeatherText = styled.p`
  font-weight: bold;
  margin: 0.2rem 0;
`;

const StyledCityName = styled.p`
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const StyledCountryName = styled.p`
  font-weight: 400;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Degrees = styled.h1`
  margin: 1.5rem 0 0 2rem;
  font-size: 2rem;
  font-weight: bold;
`;

export default DriverCard;