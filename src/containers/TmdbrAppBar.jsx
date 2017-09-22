import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const drawerWidth = 240;

const styles = theme => ({
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        order: 1,
        marginTop: 0
    },
    flex: {
        flex: 1
    },
});

function TmdbrAppBar({classes, title}) {
    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Typography type="title" color="inherit" className={classes.flex}>
                    {title}
                </Typography>
                <Button color="contrast">Login</Button>
                <Button color="contrast">Login</Button>
            </Toolbar>
        </AppBar>
    );
}

TmdbrAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TmdbrAppBar);