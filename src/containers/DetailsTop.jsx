import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import { withStyles } from 'material-ui/styles';
import CONFIG from '../constants/config.js';

const styles = theme => ({
	root: {
		flexGrow: 1,
		marginTop: 0,
		marginLeft: 'auto',
		marginRight: 'auto'
    },
    top: {
        overflow: 'hidden',
        height: 300
    }
});

function DetailsTop(props) {
    let { classes } = props;
    let style = {
        backgroundImage: `url(${CONFIG.IMGSERV_XL + props.img})`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 30%'
    };
    return (
        <div style={props.img ? style : null} className={classes.top}>
        </div>
    )
}

DetailsTop.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailsTop);