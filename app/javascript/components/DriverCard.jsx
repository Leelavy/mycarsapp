import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Helmet from '../../assets/images/helmet.png';
import { convertDate } from '../utils/utils';

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
    },
  }
}));

const DriverCard = ({ driver }) => {

  const classes = useStyles();
  const theme = useTheme();
  const { name, email, date_of_birth: birthday } = driver.attributes;

  return (
    <StyledLink to={`/drivers/${driver.id}`}>
      <Paper className={classes.paper}>
        <StyledDataDiv>
          <StyledBlock
            color={theme.palette.common.bullet}>
            <h5>NAME</h5>
            <p>{name}</p>
          </StyledBlock>
          <StyledBlock
            color={theme.palette.common.bullet}>
            <h5>EMAIL</h5>
            <p>{email}</p>
          </StyledBlock>
          <StyledBlock
            color={theme.palette.common.bullet}>
            <h5>BIRTHDAY</h5>
            <p>{convertDate(new Date(birthday))}</p>
          </StyledBlock>
        </StyledDataDiv>
        <StyledImg src={Helmet} alt="driver-image" />
      </Paper>
    </StyledLink >
  );
}

const StyledDataDiv = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 2rem;
`;

const StyledBlock = styled.div`
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
  background-color: #1f273b;

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

const StyledImg = styled.img`
  max-width: 120%;
  max-height: 120%;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;


export default DriverCard;