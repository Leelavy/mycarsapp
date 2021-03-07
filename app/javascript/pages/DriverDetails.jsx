import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { pageAnimationFromBottom } from '../styles/animations';
import { motion } from 'framer-motion';

const DriverDetails = () => {

  const location = useLocation();
  const carId = decodeURI(location.pathname.split("/")[2]);

  console.log(carId);

  return (
    <motion.div
      variants={pageAnimationFromBottom}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      Driver details for driver {carId}
    </motion.div>
  );
}

export default DriverDetails;