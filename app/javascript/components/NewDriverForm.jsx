import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import CustomizedTextField from './CustomizedTextField';
import AddButton from './AddButton';
import { useHistory } from 'react-router-dom';
import DatePicker from './DatePicker';
import { createDriver } from '../api/driversApi';
import MultipleSelect from './MultipleSelect';
import { getSelectCars } from '../api/carsApi';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

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
  },
  margin: {
    margin: theme.spacing(2),
  },
}));

const NewDriverForm = () => {

  const classes = useStyles();
  const history = useHistory();
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [dateInput, setDateInput] = useState(new Date());
  const [selectMenuItems, setSelectMenuItems] = useState([]);
  const [selectedCars, setSelectedCars] = useState([]);
  const [inputError, setInputError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

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

  const handleAddClick = () => {
    if (nameInput.length && isValidEmail(emailInput)) {
      const carsIds = [];
      selectMenuItems.forEach(item => {
        if (selectedCars.includes(item.title)) {
          carsIds.push(item.id)
        }
      });
      createDriver(nameInput, emailInput, dateInput, carsIds)
        .then(history.push('/drivers'))
        .catch(resp => {
          setErrorMsg('error from server: ' + resp);
          setInputError(true);
        })
    }
    else {
      setErrorMsg('Name and email must be provided');
      setInputError(true);
    }
  }

  const isValidEmail = (email) => {
    return email.match(/.+@.+/);
  }

  return (
    <Paper className={classes.paper}>
      <CustomizedTextField
        required={true}
        label="name"
        onChange={setNameInput}
        Icon={PersonOutlineOutlinedIcon}
      />
      <CustomizedTextField
        required={true}
        label="email"
        onChange={setEmailInput}
        Icon={EmailOutlinedIcon}
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
      <ErrorMsg>
        {inputError ? errorMsg : ''}
      </ErrorMsg>
      <AddButton
        onClick={handleAddClick}
        label="Create Driver"
      />
    </Paper>
  );
}

const ErrorMsg = styled.p`
  color: red;
  font-size: 1rem;
`;

export default NewDriverForm;