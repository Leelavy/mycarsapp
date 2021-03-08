import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import CustomizedTextField from './CustomizedTextField';
import AddButton from './AddButton';
import { Link } from 'react-router-dom';
import ColorSelect from './ColorSelect';
import { createCar } from '../api/carsApi';
import { getSelectDrivers } from '../api/driversApi';
import MultipleSelect from './MultipleSelect';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    boxShadow: 'none',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '450px',
    minHeight: '300px',
    borderRadius: '1rem',
    background: theme.palette.common.paper,
    padding: '1rem',
    marginTop: '2rem',
  }
}));

const NewCarForm = () => {

  const classes = useStyles();
  const [titleInput, setTitleInput] = useState('');
  const [carTypeInput, setCarTypeInput] = useState('');
  const [colorInput, setColorInput] = useState('');
  const [selectMenuItems, setSelectMenuItems] = useState([]);
  const [selectedDrivers, setSelectedDrivers] = useState([]);

  const handleAddClick = () => {
    const driversIds = [];
    selectMenuItems.forEach(item => {
      if (selectedDrivers.includes(item.name)) {
        driversIds.push(item.id)
      }
    });
    createCar(titleInput, carTypeInput, colorInput, driversIds)
      .then(resp => console.log(resp))
      .catch(resp => console.log(resp))
  }

  const handleSelect = (itemsSelected) => {
    setSelectedDrivers(itemsSelected);
  }

  useEffect(() => {
    getSelectDrivers()
      .then(resp => {
        setSelectMenuItems(resp.data.selected);
      })
      .catch(resp => console.log(resp))
  }, []);

  return (
    <Paper className={classes.paper}>
      <CustomizedTextField
        label="title"
        onChange={setTitleInput}
      />
      <CustomizedTextField
        label="type"
        onChange={setCarTypeInput}
      />
      <ColorSelect
        label="color"
        onChange={setColorInput}
        colorInput={colorInput}
      />
      <MultipleSelect
        onChange={handleSelect}
        menuItems={selectMenuItems}
        subject="drivers"
      />
      <StyledLink to="/cars">
        <AddButton
          onClick={handleAddClick}
          label="Create Car" />
      </StyledLink>
    </Paper>
  );
}

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export default NewCarForm;