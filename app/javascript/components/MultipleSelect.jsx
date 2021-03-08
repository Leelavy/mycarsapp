import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  noLabel: {
    marginTop: theme.spacing(3),
  },
  container: {
    display: 'flex',
    paddingLeft: '0.5rem',
    margin: '2rem 0',
    '& .MuiSelect-select': {
      width: '180px',
    }
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const MultipleSelect = ({ menuItems, onChange, subject }) => {

  const classes = useStyles();
  const [selectedItems, setSelectedItems] = useState([]);

  const handleChange = (event) => {
    setSelectedItems(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className={classes.container}>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <InputLabel id="demo-mutiple-checkbox-label">
            {`select ${subject}`}
          </InputLabel>
          <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            value={selectedItems}
            onChange={handleChange}
            input={<Input />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {menuItems.length > 0 && menuItems.map(item => (
              <MenuItem key={item.id} value={item[Object.keys(item)[1]]}>
                <Checkbox checked={selectedItems.indexOf(item[Object.keys(item)[1]]) > -1} />
                <ListItemText primary={item[Object.keys(item)[1]]} />
              </MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>
    </div>);
}

export default MultipleSelect;