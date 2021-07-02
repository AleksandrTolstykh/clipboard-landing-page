import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    marginTop: 100,
    marginBottom: 100,
  },
}));

function Logos() {
  const classes = useStyles();

  return (
    <Grid container spacing={10} justify='center' className={classes.root}>
      <Grid item xs={12} md={2}>
        <img src='images/logo-google.png' alt='google' />
      </Grid>
      <Grid item xs={12} md={2}>
        <img src='images/logo-ibm.png' alt='ibm' />
      </Grid>
      <Grid item xs={12} md={2}>
        <img src='images/logo-microsoft.png' alt='microsoft' />
      </Grid>
      <Grid item xs={12} md={2}>
        <img src='images/logo-hp.png' alt='hp' />
      </Grid>
      <Grid item xs={12} md={2}>
        <img src='images/logo-vector-graphics.png' alt='vector-graphics' />
      </Grid>
    </Grid>
  );
}

export default Logos;
