import React from 'react';
import NewDriverForm from '../components/NewDriverForm';
import { motion } from 'framer-motion';
import styled from 'styled-components'
import { pageAnimationFromBottom } from '../styles/animations';
import { useTheme } from '@material-ui/core/styles'

const AddNewDriver = () => {

  const theme = useTheme();

  return (
    <StyledContainer
      variants={pageAnimationFromBottom}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <StyledTitleArea>
        <Title color={theme.palette.common.title}>
          ADD NEW DRIVER
        </Title>
        <Line color={theme.palette.primary.main} />
      </StyledTitleArea>
      <NewDriverForm />
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

const StyledTitleArea = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

const Line = styled(motion.div)`
  width: 40%;
  height: 0.3rem;
  margin: 1rem 0;
  background: ${props => props.color};
`;

const Title = styled.h1`
  color: ${props => props.color}
`;

export default AddNewDriver;