import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Hidden from 'material-ui/Hidden';
import withWidth from 'material-ui/utils/withWidth';
import compose from 'recompose/compose';

import { changeDrawerState } from './actions.js';
import { connect } from 'react-redux';

const drawerWidth = 240;

const styles = theme => ({
    appBar: {
        width: '100%',
        marginLeft: drawerWidth,
        order: 1,
        marginTop: 0,
        [theme.breakpoints.up('lg')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    flex: {
        flex: 1
    },
});

function TmdbrAppBar(props) {
    let {classes, title} = props;
    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Hidden lgUp>
                    <IconButton onClick={() => (props.changeDrawerState(true))} className={classes.menuButton} color="contrast">
                        <MenuIcon />
                    </IconButton>
                </Hidden>
                <Typography type="title" color="inherit" className={classes.flex}>
                    {title}
                </Typography>
                {props.children}
            </Toolbar>
        </AppBar>
    )
}

TmdbrAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles),connect(null, {changeDrawerState}))(TmdbrAppBar);