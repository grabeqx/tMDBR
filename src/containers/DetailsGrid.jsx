import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
	root: {
		flexGrow: 1,
		marginTop: 30,
		marginLeft: 'auto',
		marginRight: 'auto',
        maxWidth: 1100,
        padding: 10
	}
});

function DetailsGrid(props) {
    const classes = props.classes;
    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                {props.children}
            </Grid>
        </div>
    )
}

DetailsGrid.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailsGrid);