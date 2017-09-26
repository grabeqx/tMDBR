import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';

import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import withWidth from 'material-ui/utils/withWidth';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { changeDrawerState } from './actions.js';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const styles = theme => ({
    drawerPaper: {
        height: '100%',
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        fontSize: '25px'
    }
});

function TmdbrDrawer(props) {
    let {classes, drawerTitle} = props;
    return (
        <Drawer type={(props.width != 'lg' && props.width != 'xl') ? "temporary" : "permanent"} 
            classes={{ paper: classes.drawerPaper, docked: classes.drawerPaper }} 
            open={props.drawerState}
            onClick={() => (props.changeDrawerState(false))}
            >
            <div className={classes.drawerHeader}>
                <Typography type="title">
                    <Link to="/">{drawerTitle ? drawerTitle : null}</Link>
                </Typography>
            </div>
            <Divider />
            {props.children}
        </Drawer>
    );
}

function mapStateToProps(state) {
    return {
        drawerState: state.appState.drawerOpen
    }
}

TmdbrDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles), withWidth(), connect(mapStateToProps, {changeDrawerState}))(TmdbrDrawer);