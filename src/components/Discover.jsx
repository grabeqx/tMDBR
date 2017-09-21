import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { discoverMovies } from '../actions/action.creator.js';
import { withRouter } from 'react-router-dom';

import CardGrid from '../containers/CardGrid';

class Discover extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.movies;
        console.log(this);
    }

    componentDidMount() {
        this.props.discoverMovies();
    }

    componentWillReceiveProps(nextProps) {
        if(this.state.page != nextProps.movies.page) {
            this.setState({...nextProps.movies})
        }
    }

    render() {
        return (
            <CardGrid />
        )
    }
}

const mapStateToProps = function(state) {
    return {
        movies: state.movies.discoveredMovies
    }
}

const Discovercontainer = connect(mapStateToProps, { discoverMovies })(Discover);

export default Discovercontainer;