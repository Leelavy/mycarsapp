import 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DateFnsUtils from '@date-io/date-fns';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
  },
  picker: {
    maxWidth: '182px',
    marginTop: '12px',
  }
}));

const DatePicker = ({ onChange }) => {

  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onChange(date);
  };

  return (
    <div className={classes.margin}>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <EventAvailableIcon />
        </Grid>
        <Grid item>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              label="Date of Birth"
              className={classes.picker}
              autoOk
              variant="inline"
              format="dd/MM/yyyy"
              id="date-picker-inline"
              value={selectedDate}
              onChange={handleDateChange}

              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
      </Grid>
    </div>
  );
}

export default DatePicker;