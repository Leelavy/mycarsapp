import React from 'react';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(3),
  },
}));

const AddButton = ({ label, onClick }) => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="secondary"
      className={classes.button}
      startIcon={<AddCircleIcon />}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}

export default AddButton;