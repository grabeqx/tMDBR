import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMovie } from '../actions/actions.js';

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
                details
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