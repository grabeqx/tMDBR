import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { changeTitle } from '../actions/actions.js';
import CardGridComponent from './CardGridComponent';

class FeaturesMovies extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.changeTitle("Favorites Movies");
    }
    
    render() {
        return (
            <CardGridComponent movies={this.props.movies} />
        )
    }
}

const mapStateToProps = function(state) {
    return {
        movies: state.movies.favoritesMovies
    }
}

export default connect(
    mapStateToProps, 
    { changeTitle }
)(FeaturesMovies);