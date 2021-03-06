import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';


const styles = theme => ({
    paper: {
        marginTop: 17,
        padding: 0,
        color: theme.palette.text.secondary,
    },
    iframe: {
        width: '100%',
        marginBottom: -3
    }
});

function MovieTrailer(props) {
    let {classes} = props;
    let src = `https://www.youtube.com/embed/${props.video}`;
    return (
        <Grid item xs={12}>
            <Paper className={classes.paper} elevation={2}>
                <iframe height="380" className={classes.iframe} src={src} frameBorder="0" allowFullScreen></iframe>
            </Paper>
        </Grid>
    )
}

MovieTrailer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieTrailer);