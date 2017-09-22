import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List, { ListItemText, ListItem } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

const drawerWidth = 240;

const styles = theme => ({
    drawerPaper: {
        position: 'relative',
        height: '100%',
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        fontSize: '20px'
    }
});

function TmdbrDrawer({classes, drawerTitle}) {
    return (
        <Drawer type="persistent" anchor="left" classes={{paper: classes.drawerPaper}}>
            <div className={classes.drawerHeader}>
                <Typography>
                    {drawerTitle ? drawerTitle : null}
                </Typography>
            </div>
            <List dense={false}>
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
    );
}

TmdbrDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TmdbrDrawer);