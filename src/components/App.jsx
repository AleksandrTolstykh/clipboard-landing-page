import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import BaseInfo from './BaseInfo';
import AccessInfo from './AccessInfo';
import ToolsInfo from './ToolsInfo';
import Logos from './Logos';
import DownloadInfo from './DownloadInfo';
import Contacts from './Contacts';
import Footer from './Footer';

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: 'Bai Jamjuree',
    overflowX: 'hidden',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Header />
      <BaseInfo />
      <AccessInfo />
      <ToolsInfo />
      <Logos />
      <DownloadInfo />
      <Contacts />
      <Grid container justify='center'>
        <Footer />
      </Grid>
    </Box>
  );
}

export default App;
