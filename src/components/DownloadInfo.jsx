import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CustomButton from './CustomButton';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
  },
  title: {
    color: 'hsl(210, 10%, 33%)',
    fontWeight: 600,
    marginLeft: '25%',
    marginRight: '25%',
    [theme.breakpoints.down('md')]: {
      marginLeft: '1%',
      marginRight: '1%',
    },
  },
  subtitle: {
    color: 'hsl(201, 11%, 66%)',
    fontWeight: 400,
    marginLeft: '25%',
    marginRight: '25%',
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

function DownloadInfo() {
    const classes = useStyles();

    return (
      <Box className={classes.root}>
        <h2 className={classes.title}>Clipboard for iOS and Mac OS</h2>
        <h4 className={classes.subtitle}>Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.</h4>
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
      </Box>
    );
}

export default DownloadInfo;
