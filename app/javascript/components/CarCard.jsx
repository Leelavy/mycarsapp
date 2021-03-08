import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import RedCar from '../../assets/images/redcar.png';
import YellowCar from '../../assets/images/yellowcar.png';
import BlueCar from '../../assets/images/bluecar.png';
import DefaultCar from '../../assets/images/defaultcar.png';
import { motion } from 'framer-motion';

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
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'space-between',
    height: '200px',
    borderRadius: '1rem',
    background: theme.palette.common.card,
    cursor: 'pointer',
    transition: 'transform 0.3s',
    position: 'relative',
    opacity: '0.7',
    width: '100%',
    '&:hover': {
      opacity: 1,
      cursor: 'pointer',
      transform: 'scale(0.98)',
    }
  }
}));

const CarCard = ({ car }) => {

  const classes = useStyles();
  const theme = useTheme();
  const { title, car_type: carType, color } = car.attributes;

  const renderColorImage = () => {
    let image = DefaultCar;
    if (color === 'red') {
      image = RedCar;
    }
    else if (color === 'yellow') {
      image = YellowCar;
    }
    else if (color === 'blue') {
      image = BlueCar;
    }
    return image;
  }

  return (
    <StyledLink to={`/cars/${car.id}`}>
      <Paper className={classes.paper}>
        <StyledDataDiv>
          <StyledBlock
            color={theme.palette.common.bullet}>
            <h5>TITLE</h5>
            <p>{title}</p>
          </StyledBlock>
          <StyledBlock
            color={theme.palette.common.bullet}>
            <h5>Car Type</h5>
            <p>{carType}</p>
          </StyledBlock>
          <StyledBlock
            color={theme.palette.common.bullet}>
            <h5>Color</h5>
            <p>{color}</p>
          </StyledBlock>
        </StyledDataDiv>
        <StyledImg src={renderColorImage()} alt="car-image" />
      </Paper>
    </StyledLink >
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

const StyledImg = styled(motion.img)`
  max-width: 120%;
  max-height: 120%;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;


export default CarCard;