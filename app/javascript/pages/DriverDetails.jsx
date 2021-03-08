import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { pageAnimationFromBottom } from '../styles/animations';
import { motion } from 'framer-motion';
import { getDriverById } from '../api/driversApi';
import { fade } from '../styles/animations';

const DriverDetails = () => {

  const location = useLocation();
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
      <div>
        <p>{driverDetails.name}</p>
        <p>{driverDetails.email}</p>
        <p>{driverDetails.birthday}</p>
      </div>

      {driverDetails.cars.map(car => (
        <div>
          <p>{car.attributes.title}</p>
          <p>{car.attributes.car_type}</p>
          <p>{car.attributes.color}</p>
        </div>
      ))}
    </StyledContainer>
  );
}

const StyledContainer = styled(motion.div)`
  width: 100%;
`;

export default DriverDetails;