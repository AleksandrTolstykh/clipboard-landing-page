import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  textBlock: {
    marginTop: 25,
    marginLeft: 75,
    [theme.breakpoints.down('md')]: {
      marginTop: 0,
      marginLeft: 0,
    },
  },
  title: {
    color: 'hsl(210, 10%, 33%)',
    fontWeight: 600,
    textAlign: 'left',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
  subtitle: {
    color: 'hsl(201, 11%, 66%)',
    fontWeight: 400,
    textAlign: 'left',
    marginBottom: 50,
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
}));

function BaseInfo() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <img src='images/image-computer.png' alt='computer' width='100%' />
      </Grid>
      <Grid item xs={12} md={3} className={classes.textBlock}>
        <h3 className={classes.title}>Quick Search</h3>
        <h4 className={classes.subtitle}>Easily search your snippets by content, category, web address, application, and more.</h4>
        <h3 className={classes.title}>iCloud Sync</h3>
        <h4 className={classes.subtitle}>Instantly saves and syncs snippets across all your devices.</h4>
        <h3 className={classes.title}>Complete History</h3>
        <h4 className={classes.subtitle}>Retrieve any snippets from the first moment you started using the app.</h4>
      </Grid>
    </Grid>
  );
}

export default BaseInfo;
