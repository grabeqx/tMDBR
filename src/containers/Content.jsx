import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import TmdbrAppBar from './TmdbrAppBar';
import TmdbrDrawer from './TmdbrDrawer';

const styles = theme => ({
    root: {
        width: '100%',
        minHeight: '100vh',
        marginTop: 0,
        zIndex: 1,
        overflow: 'hidden',
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        minHeight: '100vh',
    },
    content: {
        backgroundColor: theme.palette.background.default,
        width: '100%',
        padding: theme.spacing.unit * 3,
        height: 'calc(100vh - 56px)',
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100vh - 64px)',
            marginTop: 64,
        },
    }
});

function Content(props) {
    const { classes } = props;
  
    return (
        <div className={classes.root}>
            <div className={classes.appFrame}>
                <TmdbrAppBar title={props.title}/>
                <TmdbrDrawer drawerTitle={props.drawerTitle}/>
                <main className={classes.content}>
                    {props.children}
                </main>
            </div>
        </div>
    );
}
  
Content.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Content);