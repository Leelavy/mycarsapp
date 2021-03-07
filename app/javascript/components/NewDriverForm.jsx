import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
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

const NewDriverForm = () => {

  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <CustomizedTextField label="name" />
      <CustomizedTextField label="email" />
      <CustomizedTextField label="date of birth" />
      <StyledLink to="/drivers">
        <AddButton label="Create Driver" />
      </StyledLink>
    </Paper>
  );
}

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export default NewDriverForm;