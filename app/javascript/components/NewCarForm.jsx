import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import CustomizedTextField from './CustomizedTextField';
import AddButton from './AddButton';
import { useHistory } from 'react-router-dom';
import ColorSelect from './ColorSelect';
import { createCar } from '../api/carsApi';
import { getSelectDrivers } from '../api/driversApi';
import MultipleSelect from './MultipleSelect';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import GradeIcon from '@material-ui/icons/Grade';

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
  const history = useHistory();
  const [titleInput, setTitleInput] = useState('');
  const [carTypeInput, setCarTypeInput] = useState('');
  const [colorInput, setColorInput] = useState('');
  const [selectMenuItems, setSelectMenuItems] = useState([]);
  const [selectedDrivers, setSelectedDrivers] = useState([]);
  const [inputError, setInputError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

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

  const handleAddClick = () => {
    if (titleInput.length) {
      const driversIds = [];
      selectMenuItems.forEach(item => {
        if (selectedDrivers.includes(item.name)) {
          driversIds.push(item.id)
        }
      });
      createCar(titleInput, carTypeInput, colorInput, driversIds)
        .then(history.push('/cars'))
        .catch(resp => {
          setErrorMsg('error from server: ' + resp);
          setInputError(true);
        })
        ;
    }
    else {
      setErrorMsg('Name and email must be provided');
      setInputError(true);
    }
  }

  return (
    <Paper className={classes.paper}>
      <CustomizedTextField
        required={true}
        label="title"
        onChange={setTitleInput}
        Icon={DriveEtaIcon}
      />
      <CustomizedTextField
        label="type"
        onChange={setCarTypeInput}
        Icon={GradeIcon}
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
      <ErrorMsg>
        {inputError ? errorMsg : ''}
      </ErrorMsg>
      <AddButton
        onClick={handleAddClick}
        label="Create Car" />
    </Paper>
  );
}


const ErrorMsg = styled.p`
  color: red;
  font-size: 1rem;
`;

export default NewCarForm;