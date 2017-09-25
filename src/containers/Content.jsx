import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import List, { ListItemText, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import AppBar from './AppBar';
import Drawer from './Drawer';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: 0,
        zIndex: 1,
        overflow: 'hidden',
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    content: {
        backgroundColor: theme.palette.background.default,
        width: '100%',
        height: 'calc(100% - 56px)',
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px)',
            marginTop: 64,
        },
    }
});

function Content(props) {
    const { classes } = props;
  
    return (
        <div className={classes.root}>
            <div className={classes.appFrame}>
                <AppBar title={props.title}>
                    <Button color="contrast">Login</Button>
                    <Button color="contrast">Login</Button>
                </AppBar>
                <Drawer drawerTitle={props.drawerTitle}>
                    <List>
                        <ListItem button>
                            <ListItemText primary="Single-line item"/>
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemText primary="Single-line item"/>
                        </ListItem>
                        <Divider />
                    </List>
                </Drawer>
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