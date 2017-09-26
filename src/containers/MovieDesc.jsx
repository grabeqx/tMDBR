import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Chip from 'material-ui/Chip';
import FavoriteIcon from 'material-ui-icons/Favorite';
import IconButton from 'material-ui/IconButton';

import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router';

const styles = theme => ({
    paper: {
        padding: 16,
        color: theme.palette.text.secondary,
    },
    chip: {
        marginRight: theme.spacing.unit,
    },
    row: {
        marginTop: 10,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    subRow: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    favIcon: {
        height: 'auto',
        width: 30,
        marginRight: 10
    },
    subtitle: {
        displat: 'block',
        marginBottom: 5
    }
});

function MovieDesc(props) {
    let {classes} = props;
    let genres = props.genres || [];
    return (
        <Grid item xs={12}>
            <Paper className={classes.paper} elevation={2}>
                <Typography type="headline" component="h3">
                    {props.title}
                </Typography>
                <Typography type="body2" component="span" className={classes.subtitle}>
                    {props.tagline}
                </Typography>
                <Typography type="body1" component="p">
                    {props.desc}
                </Typography>
                <div className={classes.row}>
                    <div className={classes.subRow}>
                        {genres.map((item) => (
                            <Chip
                                key={item.id}
                                label={item.name}
                                className={classes.chip}
                            />
                        ))}
                    </div>
                    <IconButton aria-label="Add to favorites" color="primary" className={classes.favIcon}>
                        <FavoriteIcon />
                    </IconButton>
                </div>
            </Paper>
        </Grid>
    )
}

MovieDesc.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieDesc);