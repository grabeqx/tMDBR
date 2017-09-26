import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router';

const styles = theme => ({
    paper: {
        padding: 16,
        color: theme.palette.text.secondary,
    },
    detailsTitle: {
        marginTop: 15,
        fontSize: 20
    }
});

function formatPrice(n, currency) {
    return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
}

function MovieDetails({classes, movie}) {
    let hours = Math.floor(movie.runtime / 60);
    let minutes = Math.floor(movie.runtime % 60);
    if(minutes < 10) {
        minutes = "0" + minutes;
    }
    let budget = movie.budget || 0;
    let revenue = movie.revenue || 0;

    return (
        <Grid item xs={4}>
            <Paper className={classes.paper} elevation={2}>
                <Typography type="headline" component="h4">Vote average</Typography>
                <Typography type="body1" component="p">{movie.vote_average}</Typography>
                <Typography type="headline" component="h4" className={classes.detailsTitle}>Homepage</Typography>
                <Typography type="body1" component="p"><a href={movie.homepage}>Link</a></Typography>
                <Typography type="headline" component="h4" className={classes.detailsTitle}>Status</Typography>
                <Typography type="body1" component="p">{movie.status}</Typography>
                <Typography type="headline" component="h4" className={classes.detailsTitle}>Release date</Typography>
                <Typography type="body1" component="p">{movie.release_date}</Typography>
                <Typography type="headline" component="h4" className={classes.detailsTitle}>Duration</Typography>
                <Typography type="body1" component="p">{hours}h {minutes}m</Typography>
                <Typography type="headline" component="h4" className={classes.detailsTitle}>Budget</Typography>
                <Typography type="body1" component="p">{formatPrice(budget, "$")}</Typography>
                <Typography type="headline" component="h4" className={classes.detailsTitle}>Revenue</Typography>
                <Typography type="body1" component="p">{formatPrice(revenue, "$")}</Typography>
            </Paper>
        </Grid>
    )
}

MovieDetails.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieDetails);