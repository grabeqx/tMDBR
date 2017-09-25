import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { discoverMovies, changeTitle } from '../actions/actions.js';
import { Link } from 'react-router-dom';
import CardGrid from '../containers/CardGrid';

class Discover extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.discoverMovies();
        this.props.changeTitle("Discover Movies");
    }

    render() {
        return (
            <div>
                <CardGrid items={this.props.movies}/>
            </div>
        )
    }
}

const mapStateToProps = function(state) {
    return {
        movies: state.movies.list
    }
}

export default connect(
    mapStateToProps, 
    { discoverMovies, changeTitle }
)(Discover);