import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMovie } from '../actions/actions.js';
import Grid from 'material-ui/Grid';

import DetailsGrid from '../containers/DetailsGrid';
import DetailsTop from '../containers/DetailsTop';

class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getMovie(this.props.match.params.id);
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <DetailsTop img={this.props.currentMovie.backdrop_path} title={this.props.currentMovie.title}/>
                <DetailsGrid></DetailsGrid>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentMovie: state.movies.currentMovie
    }
}

export default connect(
    mapStateToProps, 
    { getMovie }
)(MovieDetails);