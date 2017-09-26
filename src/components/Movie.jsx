import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { getMovie, changeTitle, addToFavorites, removeFromFavorites } from '../actions/actions.js';
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
    }

    componentDidUpdate() {
        this.props.changeTitle(this.props.currentMovie.title);
    }

    addToFavorites() {
        this.props.addToFavorites(this.props.currentMovie);
    }

    removeFromFavorites() {
        this.props.removeFromFavorites(this.props.currentMovie.id);
    }

    render() {
        console.log(this.props.currentMovie);
        let {classes} = this.props;
        return (
            <div>
                <DetailsTop img={this.props.currentMovie.backdrop_path}/>
                <DetailsGrid>
                    <Grid container item xs={8}>
                        <MovieDesc title={this.props.currentMovie.title} 
                            desc={this.props.currentMovie.overview} 
                            genres={this.props.currentMovie.genres} 
                            tagline={this.props.currentMovie.tagline}
                            id = {this.props.currentMovie.id}
                            favoritesMovies = {this.props.favoritesMovies}
                            addToFavorites={this.addToFavorites.bind(this)} 
                            removeFromFavorites={this.removeFromFavorites.bind(this)}
                        />
                        <MovieTrailer />
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
        favoritesMovies: state.movies.favoritesMovies
    }
}

export default  connect(
    mapStateToProps, 
    { getMovie, changeTitle, addToFavorites, removeFromFavorites }
)(Movie);