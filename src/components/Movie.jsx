import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { getMovie, changeTitle } from '../actions/actions.js';
import Grid from 'material-ui/Grid';

import DetailsGrid from '../containers/DetailsGrid';
import DetailsTop from '../containers/DetailsTop';
import MovieDesc from '../containers/MovieDesc';
import MovieDetails from '../containers/MovieDetails';

class Movie extends React.Component {
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
                <DetailsTop img={this.props.currentMovie.backdrop_path}/>
                <DetailsGrid>
                    <Grid container item xs={8}>
                        <MovieDesc title={this.props.currentMovie.title} 
                            desc={this.props.currentMovie.overview} 
                            genres={this.props.currentMovie.genres} 
                            tagline={this.props.currentMovie.tagline}
                        />
                    </Grid>
                    <MovieDetails movie={this.props.currentMovie}/>
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

export default  connect(
    mapStateToProps, 
    { getMovie, changeTitle }
)(Movie);