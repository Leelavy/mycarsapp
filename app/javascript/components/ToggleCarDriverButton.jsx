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

const ToggleCarDriverButton = () => {

  const classes = useStyles();
  const [carDriverToggle, setCarDriverToggle] = useState('cars');

  const handleToggle = (event, toggled) => {
    setCarDriverToggle(toggled);
  };

  console.log(carDriverToggle);

  return (
    <ToggleButtonGroup
      className={classes.toggleContainer}
      value={carDriverToggle}
      exclusive
      onChange={handleToggle}
      aria-label="carDriverToggle"
    >
      <ToggleButton className={classes.toggleButton} value="cars" aria-label="left aligned" >
        <DriveEtaIcon />
      </ToggleButton>
      <ToggleButton className={classes.toggleButton} value="drivers" aria-label="right aligned">
        <PeopleAltIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default ToggleCarDriverButton;