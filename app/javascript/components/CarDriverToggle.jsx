import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

const useStyles = makeStyles((theme) => ({
  toggleContainer: {
    maxHeight: 40,
    margin: theme.spacing(1),
  },
  toggleButton: {
    color: 'white',
  },
}));

const CarDriverToggle = ({ carDriverToggle, setCarDriverToggle }) => {

  const classes = useStyles();
  const handleToggle = (event, toggled) => {
    setCarDriverToggle(toggled);
  };

  return (
    <ToggleButtonGroup
      className={classes.toggleContainer}
      value={carDriverToggle}
      exclusive
      onChange={handleToggle}
      aria-label="carDriverToggle"
    >
      <ToggleButton className={classes.toggleButton} value="car" aria-label="left aligned" >
        <DriveEtaIcon />
      </ToggleButton>
      <ToggleButton className={classes.toggleButton} value="driver" aria-label="right aligned">
        <PeopleAltIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default CarDriverToggle;