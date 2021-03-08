import React, { useState, useEffect } from 'react';
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

const CustomizedSelect = ({ menuItems, subject, onSelect, isDisabled }) => {
  const classes = useStyles();
  const [inputSelectItem, setInputSelectItem] = useState({});
  const [placeholder, setPlaceHolder] = useState(`select a ${subject}`);
  const [isDisabledSelect, setIsDisabledSelect] = useState(false);

  const handleChange = (event) => {
    const item = event.target.value;
    setInputSelectItem(item);
    onSelect(item);
  };

  useEffect(() => {
    setIsDisabledSelect(isDisabled);
  }, [isDisabled])

  useEffect(() => {
    if (subject === null) {
      setPlaceHolder(`You must choose either cars or drivers in the toggle to continue`);
      setIsDisabledSelect(true);
    } else if (isDisabled && menuItems.length === 0) {
      setPlaceHolder(`No data to choose from. Add new cars or drivers`);
      setIsDisabledSelect(true);
    } else {
      setPlaceHolder(`select a ${subject}`);
      setIsDisabledSelect(false)
    }
    setInputSelectItem({});
  }, [subject]);

  const renderVal = () => {
    let val = placeholder;
    if (Object.keys(inputSelectItem)[1]) {
      val = inputSelectItem[Object.keys(inputSelectItem)[1]];
    }
    return val;
  }

  return (
    <FormControl className={classes.formControl}>
      <Select
        MenuProps={{ disableScrollLock: true }}
        value={inputSelectItem}
        onChange={handleChange}
        displayEmpty
        disabled={isDisabledSelect}
        className={classes.selectEmpty}
        inputProps={{ 'aria-label': 'Without label' }}
        renderValue={() => renderVal()}
        input={<BootstrapInput />}
      >
        {menuItems.length > 0 && menuItems.map(item =>
          (<MenuItem value={item} key={item.id}>{item[Object.keys(item)[1]]}</MenuItem>))
        }
      </Select>
    </FormControl>
  );
}

export default CustomizedSelect;