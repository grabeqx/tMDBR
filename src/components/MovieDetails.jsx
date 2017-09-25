import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMovie, changeTitle } from '../actions/actions.js';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose';

import DetailsGrid from '../containers/DetailsGrid';
import DetailsTop from '../containers/DetailsTop';

const styles = theme => ({
    paper: {
        padding: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
});

class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getMovie(this.props.match.params.id);
    }

    componentDidUpdate() {
        console.log(this.props);
        this.props.changeTitle(this.props.currentMovie.title);
    }

    render() {
        let {classes} = this.props;
        return (
            <div>
                <DetailsTop img={this.props.currentMovie.backdrop_path} title={this.props.currentMovie.title}/>
                <DetailsGrid>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper} elevation={4}>xs=12</Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper className={classes.paper} elevation={4}>xs=12 sm=6</Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper className={classes.paper} elevation={4}>xs=12 sm=6</Paper>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Paper className={classes.paper} elevation={4}>xs=6 sm=3</Paper>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Paper className={classes.paper} elevation={4}>xs=6 sm=3</Paper>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Paper className={classes.paper} elevation={4}>xs=6 sm=3</Paper>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Paper className={classes.paper} elevation={4}>xs=6 sm=3</Paper>
                        </Grid>
                    </Grid>
                </DetailsGrid>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentMovie: state.movies.currentMovie
    }
}

MovieDetails.propTypes = {
    classes: PropTypes.object.isRequired,
};
  

export default compose(withStyles(styles), connect(
    mapStateToProps, 
    { getMovie, changeTitle }
))(MovieDetails);