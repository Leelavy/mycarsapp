import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { pageAnimationFromBottom } from '../styles/animations';
import { motion } from 'framer-motion';

const CarDetails = () => {

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
      Car details for car {carId}
    </motion.div>
  );
}

export default CarDetails;