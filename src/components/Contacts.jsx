import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CustomButton from './CustomButton';
import { CustomFaceBookIcon, CustomTwitterIcon, CustomInstagramIcon } from './Icons';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'hsl(201, 11%, 66%)',
    paddingLeft: 100,
    paddingTop: 50,
    paddingBottom: 50,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
    },
  },
}));

function Contacts() {
  const classes = useStyles();

  return (
    <Grid container justify='center' className={classes.root}>
      <Grid item xs={12} md={2}>
        <img src='images/logo.svg' alt='logo' width='25%' />
      </Grid>
      <Grid item xs={12} md={2}>
        <Box>
          <CustomButton
            content='FAQs'
            color='hsl(210, 10%, 33%)'
            colorHover='hsl(171, 66%, 44%)'
            background='hsl(201, 11%, 66%)'
          />
        </Box>
        <Box>
          <CustomButton
            content='Contact Us'
            color='hsl(210, 10%, 33%)'
            colorHover='hsl(171, 66%, 44%)'
            background='hsl(201, 11%, 66%)'
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={2}>
        <Box>
          <CustomButton
            content='Privacy Policy'
            color='hsl(210, 10%, 33%)'
            colorHover='hsl(171, 66%, 44%)'
            background='hsl(201, 11%, 66%)'
          />
        </Box>
        <Box>
          <CustomButton
            content='Press Kit'
            color='hsl(210, 10%, 33%)'
            colorHover='hsl(171, 66%, 44%)'
            background='hsl(201, 11%, 66%)'
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={2}>
        <Box>
          <CustomButton
            content='Install Guide'
            color='hsl(210, 10%, 33%)'
            colorHover='hsl(171, 66%, 44%)'
            background='hsl(201, 11%, 66%)'
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <CustomFaceBookIcon />
        <CustomTwitterIcon />
        <CustomInstagramIcon />
      </Grid>
    </Grid>
  );
}

export default Contacts;
