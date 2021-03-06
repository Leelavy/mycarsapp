import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const useStyles = makeStyles((theme) => ({
  toggleButtonGroup: {
    color: 'white',
  },
}));

const ToggleCarDriverButton = () => {

  const classes = useStyles();
  const [carDriverToggle, setCarDriverToggle] = React.useState('left');

  const handleToggle = (event, toggled) => {
    setCarDriverToggle(toggled);
  };

  return (
    <ToggleButtonGroup
      className={classes.toggleButtonGroup}
      value={carDriverToggle}
      exclusive
      onChange={handleToggle}
      aria-label="carDriverToggle"
    >
      <ToggleButton value="cars" aria-label="left aligned">
        <FormatAlignLeftIcon />
      </ToggleButton>
      <ToggleButton value="drivers" aria-label="right aligned">
        <FormatAlignRightIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default ToggleCarDriverButton;