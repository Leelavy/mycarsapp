import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Logo from '../../assets/images/motorino-logo.svg'
import CustomizedSelect from '../components/CustomizedSelect';
import ToggleCarDriverButton from '../components/ToggleCarDriverButton';
import CustomizedTable from '../components/CustomizedTable';
import { menuItems } from '../dummyData';

const Home = () => {

  return (
    <StyledContainer>
      <StyledLogo src={Logo} alt="logo" />
      <StyledSelectDiv>
        <CustomizedSelect menuItems={menuItems} />
        <ToggleCarDriverButton />
      </StyledSelectDiv>
      <CustomizedTable />
    </StyledContainer>
  );
}

const StyledContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledLogo = styled(motion.img)`
  margin-top: 2rem;
  max-width: 600px;
`;

const StyledSelectDiv = styled(motion.div)`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
`;

export default Home;