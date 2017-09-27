import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { getMovie, getTrailer } from '../actions/actions.js';
import Grid from 'material-ui/Grid';

import DetailsGrid from '../containers/DetailsGrid';
import DetailsTop from '../containers/DetailsTop';
import MovieDesc from '../containers/MovieDesc';
import MovieDetails from '../containers/MovieDetails';
import MovieTrailer from '../containers/MovieTrailer';

class Movie extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getMovie(this.props.match.params.id);
        this.props.getTrailer(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                <DetailsTop img={this.props.currentMovie.backdrop_path}/>
                <DetailsGrid>
                    <Grid item xs={12} sm={7} md={8}>
                        <MovieDesc 
                            movie={this.props.currentMovie}
                            favoritesMovies = {this.props.favoritesMovies}
                        />
                        <MovieTrailer video={this.props.video} />
                    </Grid>
                    <MovieDetails movie={this.props.currentMovie}/>
                </DetailsGrid>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentMovie: state.movies.currentMovie,
        favoritesMovies: state.movies.favoritesMovies,
        video: state.movies.video
    }
}

export default  connect(
    mapStateToProps, 
    { getMovie, getTrailer }
)(Movie);