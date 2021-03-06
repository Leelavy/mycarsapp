import React from 'react';
import styled from 'styled-components';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    boxShadow: 'none',
    alignItems: 'center',
    justifyContent: 'space-around',
    minHeight: '100px',
    borderRadius: '1rem',
    overflow: 'hidden',
    background: theme.palette.secondary.main,
    padding: '1rem',
    transition: 'transform .2s',
    position: 'relative',
    cursor: 'pointer',
    opacity: '0.7',
    width: '100%',
    '&:hover': {
      opacity: 1,
      cursor: 'pointer',
      transform: 'scale(0.95)',
    }
  }
}));

const ContainedCarCard = ({ attributes }) => {
  const classes = useStyles();
  const theme = useTheme();
  const color = theme.palette.common.title;

  return (
    <Paper className={classes.paper} >
      {attributes && (
        <>
          <Detail color={color}>
            TITLE:
            <p>{attributes.title}</p>
          </Detail>
          <Detail color={color}>
            Type:
            <p>{attributes.car_type}</p>
          </Detail>
          <Detail color={color}>
            Color:
            <p>{attributes.color}</p>
          </Detail>
        </>
      )}
    </Paper>
  );
}

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 0.8rem;
  margin-bottom: 1rem;
  color: ${props => props.color};
  color: #f57c6e;
  p{
    color: white;
    font-size: 1.2rem;
    margin-top: 0.3rem;
    font-weight: bold;
  }
`;

export default ContainedCarCard;