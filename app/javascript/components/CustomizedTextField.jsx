import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(2),
  },
}));

const CustomizedTextField = ({ label, onChange }) => {
  const classes = useStyles();

  const handleChange = (e) => {
    onChange(e.target.value);
  }

  return (
    <div className={classes.container}>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <AccountCircle />
        </Grid>
        <Grid item>
          <TextField
            color="secondary"
            onChange={handleChange}
            id="input-with-icon-grid"
            label={label}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default CustomizedTextField;