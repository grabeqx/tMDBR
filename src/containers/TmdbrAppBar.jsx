import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const drawerWidth = 240;

const styles = theme => ({
    appBar: {
        position: 'absolute',
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        order: 1,
        marginTop: 0
    }
});

function TmdbrAppBar({classes, title}) {
    return (
        <AppBar position="static" className={classes.appBar}>
        <Toolbar>
            <Typography type="title" color="inherit" noWrap>
            {title}
            </Typography>
        </Toolbar>
        </AppBar>
    );
}

TmdbrAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TmdbrAppBar);