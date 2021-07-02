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
  },
  subtitle: {
    color: 'hsl(201, 11%, 66%)',
    fontWeight: 400,
    marginBottom: 50,
  },
}));

function Tool(props) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img src={props.image} alt='tool' />
      <h3 className={classes.title}>{props.title}</h3>
      <h4 className={classes.subtitle}>{props.content}</h4>
    </Box>
  );
}

export default Tool;
