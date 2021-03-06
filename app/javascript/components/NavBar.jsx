import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'block',
    letterSpacing: '0.2rem',
    color: theme.palette.common.title
  },
  sectionDesktop: {
    display: 'flex',
  },
  button: {
    color: theme.palette.common.button,
    '&:hover': {
      transition: '0.2s',
      color: theme.palette.common.bold,
    }
  }
}));

const NavBar = () => {

  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            MOTORINO
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to="/drivers" style={{ color: "inherit" }}>
              <IconButton className={classes.button}>
                <PeopleAltIcon />
              </IconButton>
            </Link>
            <Link to="/cars" style={{ color: "inherit" }}>
              <IconButton className={classes.button}>
                <DriveEtaIcon />
              </IconButton>
            </Link>
            <Link to="/" style={{ color: "inherit" }}>
              <IconButton className={classes.button}>
                <HomeIcon />
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;