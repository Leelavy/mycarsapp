import React from 'react';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import CustomizedTextField from './CustomizedTextField';
import AddButton from './AddButton';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    boxShadow: 'none',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '500px',
    minHeight: '300px',
    borderRadius: '1rem',
    background: theme.palette.common.card,
    padding: '1rem',
  }
}));

const NewCarForm = () => {

  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <CustomizedTextField label="title" />
      <CustomizedTextField label="type" />
      <CustomizedTextField label="color" />
      <StyledLink to="/cars">
        <AddButton label="Create Car" />
      </StyledLink>
    </Paper>
  );
}

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export default NewCarForm;