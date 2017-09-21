import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import TmdbrCard from './TmdbrCard';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  }
});

function CardGrid(props) {
  const classes = props.classes;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={6} sm={3}>
            <TmdbrCard />
        </Grid>
        <Grid item xs={6} sm={3}>
            <TmdbrCard />
        </Grid>
        <Grid item xs={6} sm={3}>
            <TmdbrCard />
        </Grid>
        <Grid item xs={6} sm={3}>
            <TmdbrCard />
        </Grid>
        <Grid item xs={6} sm={3}>
            <TmdbrCard />
        </Grid>
        <Grid item xs={6} sm={3}>
            <TmdbrCard />
        </Grid>
        <Grid item xs={6} sm={3}>
            <TmdbrCard />
        </Grid>
      </Grid>
    </div>
  );
}

CardGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardGrid);