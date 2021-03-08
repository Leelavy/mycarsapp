import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { pageAnimationFromBottom } from '../styles/animations';
import { motion } from 'framer-motion';
import { getCarById } from '../api/carsApi';
import { fade } from '../styles/animations';

const CarDetails = () => {

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

  return (
    <StyledContainer
      variants={fade}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div>
        <p>{carDetails.title}</p>
        <p>{carDetails.carType}</p>
        <p>{carDetails.color}</p>
      </div>

      {carDetails.drivers.map(driver => (
        <div>
          <p>{driver.attributes.name}</p>
          <p>{driver.attributes.email}</p>
          <p>{driver.attributes.date_of_birth}</p>
        </div>
      ))}
    </StyledContainer>
  );
}

const StyledContainer = styled(motion.div)`
  width: 100%;
`;

export default CarDetails;