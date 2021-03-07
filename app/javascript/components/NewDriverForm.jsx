import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import CustomizedTextField from './CustomizedTextField';
import AddButton from './AddButton';
import { Link } from 'react-router-dom';
import DatePicker from './DatePicker';
import { createDriver } from '../api/driversApi';
import MultipleSelect from './MultipleSelect';
import { getSelectCars } from '../api/carsApi';

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
  },
  margin: {
    margin: theme.spacing(2),
  },
}));

const NewDriverForm = () => {

  const classes = useStyles();
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [dateInput, setDateInput] = useState(new Date());
  const [selectMenuItems, setSelectMenuItems] = useState([]);
  const [selectedCars, setSelectedCars] = useState([]);

  const handleAddClick = () => {
    const carsIds = [];
    selectMenuItems.forEach(item => {
      if (selectedCars.includes(item.title)) {
        carsIds.push(item.id)
      }
    });
    createDriver(nameInput, emailInput, dateInput, carsIds)
      .then(resp => console.log(resp))
      .catch(resp => console.log(resp))
  }

  const handleSelect = (itemsSelected) => {
    setSelectedCars(itemsSelected);
  }

  useEffect(() => {
    getSelectCars()
      .then(resp => {
        setSelectMenuItems(resp.data.selected);
      })
      .catch(resp => console.log(resp))
  }, []);

  return (
    <Paper className={classes.paper}>
      <CustomizedTextField
        label="name"
        onChange={setNameInput}
      />
      <CustomizedTextField
        label="email"
        onChange={setEmailInput}
      />
      <DatePicker
        label="date of birth"
        onChange={setDateInput}
      />
      <MultipleSelect
        onChange={handleSelect}
        menuItems={selectMenuItems}
        subject="cars"
      />
      <StyledLink to="/drivers">
        <AddButton
          onClick={handleAddClick}
          label="Create Driver"
        />
      </StyledLink>
    </Paper>
  );
}

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export default NewDriverForm;