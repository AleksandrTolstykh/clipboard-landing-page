import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CustomButton from './CustomButton';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: 'url(images/bg-header-desktop.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    textAlign: 'center',
    padding: 50,
    [theme.breakpoints.down('md')]: {
      backgroundImage: 'url(images/bg-header-mobile.png)',
    },
  },
  title: {
    color: 'hsl(210, 10%, 33%)',
    fontWeight: 600,
    marginLeft: '20%',
    marginRight: '20%',
    [theme.breakpoints.down('md')]: {
      marginLeft: '1%',
      marginRight: '1%',
    },
  },
  subtitle: {
    color: 'hsl(201, 11%, 66%)',
    fontWeight: 400,
    marginLeft: '20%',
    marginRight: '20%',
    [theme.breakpoints.down('md')]: {
      marginLeft: '1%',
      marginRight: '1%',
    },
  },
  buttons: {
    marginBottom: 100,
  },
  leftButton: {
    textAlign: 'right',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
  rightButton: {
    textAlign: 'left',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
}));

function Header() {
    const classes = useStyles();

    return (
      <Box className={classes.root}>
        <img src='images/logo.svg' alt='logo' />
        <h1 className={classes.title}>A history of everything you copy</h1>
        <h3 className={classes.subtitle}>Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.</h3>
        <Grid container spacing={1} className={classes.buttons}>
          <Grid item xs={12} md={6} className={classes.leftButton}>
            <CustomButton
              content='Download for iOS'
              color='white'
              background='hsl(171, 66%, 44%)'
            />
          </Grid>
          <Grid item xs={12} md={6} className={classes.rightButton}>
            <CustomButton
              content='Download for Mac'
              color='white'
              background='hsl(233, 100%, 69%)'
            />
          </Grid>
        </Grid>
        <h2 className={classes.title}>Keep track of your snippets</h2>
        <h4 className={classes.subtitle}>Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.</h4>
      </Box>
    );
}

export default Header;
