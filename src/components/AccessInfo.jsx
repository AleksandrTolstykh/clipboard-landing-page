import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
  },
  title: {
    color: 'hsl(210, 10%, 33%)',
    fontWeight: 600,
    marginTop: 75,
  },
  subtitle: {
    color: 'hsl(201, 11%, 66%)',
    fontWeight: 400,
    marginBottom: 100,
  },
}));

function AccessInfo() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <h2 className={classes.title}>Access Clipboard anywhere</h2>
      <h4 className={classes.subtitle}>Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.</h4>
      <img src='images/image-devices.png' alt='devices' width='75%' />
    </Box>
  );
}

export default AccessInfo;
