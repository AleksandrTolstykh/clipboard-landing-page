import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Tool from './Tool';

const useStyles = makeStyles(theme => ({
  title: {
    color: 'hsl(210, 10%, 33%)',
    fontWeight: 600,
    textAlign: 'center',
  },
  subtitle: {
    color: 'hsl(201, 11%, 66%)',
    fontWeight: 400,
    textAlign: 'center',
    marginBottom: 50,
  },
}));

function ToolsInfo() {
  const classes = useStyles();

  return (
    <Box>
      <h2 className={classes.title}>Supercharge your workflow</h2>
      <h4 className={classes.subtitle}>We’ve got the tools to boost your productivity.</h4>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Tool
              image='images/icon-blacklist.svg'
              title='Create blacklists'
              content='Ensure sensitive information never makes its way to your clipboard by excluding certain sources.'
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Tool
              image='images/icon-text.svg'
              title='Plain text snippets'
              content='Remove unwanted formatting from copied text for a consistent look.'
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Tool
              image='images/icon-preview.svg'
              title='Sneak preview'
              content='Quick preview of all snippets on your Clipboard for easy access.'
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ToolsInfo;
