import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import ColorLensIcon from '@material-ui/icons/ColorLens';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    marginLeft: '1rem',
    minWidth: 175,
    '& .MuiSvgIcon-root': {
      marginBotton: '1rem',
    }
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  margin: {
    margin: theme.spacing(2),
  },
}));

const ColorSelect = ({ colorInput, onChange }) => {
  const classes = useStyles();

  const handleChange = (event) => {
    onChange(event.target.value);
  }

  return (
    <FormControl className={classes.formControl}>
      <Grid container alignItems="flex-end">
        <Grid item>
          <ColorLensIcon />
        </Grid>
        <Grid item>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Color</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={colorInput}
              onChange={handleChange}
            >
              {[
                { hex: '#e9e967', name: 'yellow' },
                { hex: '#3d5dc4', name: 'blue' },
                { hex: '#c43d3d', name: 'red' }
              ].map(color => (
                <MenuItem key={color.name} value={color.name}>
                  <ListItemIcon>
                    <StyledColor color={color.hex} />
                  </ListItemIcon>
                  <Typography variant="inherit" noWrap>
                    {color.name}
                  </Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </FormControl>
  );
}

const StyledColor = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-left: 1rem;
  background: ${props => props.color};
`;

export default ColorSelect;
