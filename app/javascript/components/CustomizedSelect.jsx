import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    fontSize: 16,
    position: 'relative',
    backgroundColor: theme.palette.secondary.main,
    padding: '10px 26px 10px 12px',
    color: theme.palette.common.title,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderRadius: 4,
      background: theme.palette.primary.main,
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: '100%',
    maxWidth: 600,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const CustomizedSelect = ({ menuItems }) => {
  const classes = useStyles();
  const placeholder = 'select a car';
  const [inputSelectVal, setInputSelectVal] = useState('');

  const handleChange = (event) => {
    setInputSelectVal(event.target.value);
  };


  return (
    <FormControl className={classes.formControl}>
      <Select
        value={inputSelectVal}
        onChange={handleChange}
        displayEmpty
        className={classes.selectEmpty}
        inputProps={{ 'aria-label': 'Without label' }}
        renderValue={() => `${placeholder}`}
        input={<BootstrapInput />}
      >
        {menuItems && menuItems.map(item =>
          (<MenuItem value={item.id}>{item.title}</MenuItem>))
        }
      </Select>
    </FormControl>
  );
}

export default CustomizedSelect;