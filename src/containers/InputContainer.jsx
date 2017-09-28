import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';
import Grid from 'material-ui/Grid';

const styles = theme => ({
    input: {
        margin: theme.spacing.unit,
    },
	root: {
		flexGrow: 1,
		marginTop: 30,
		marginLeft: 'auto',
		marginRight: 'auto',
		maxWidth: 1100,
		padding: 10
	}
});

function InputContainer(props) {
    const classes = props.classes;
    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <Input
                        className={classes.input}
                        fullWidth
                        inputProps={{
                            'aria-label': 'Description',
                            'placeholder': 'Szukaj',
                        }}
                        onChange={props.searchMovies}
                    />
                </Grid>
            </Grid>
        </div>
    );
}
  
InputContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    };

export default withStyles(styles)(InputContainer);