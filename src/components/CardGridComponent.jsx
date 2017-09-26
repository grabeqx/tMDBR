import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../actions/actions.js';
import CardGrid from '../containers/CardGrid';

class CardGridComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    addToFavorites(movie) {
        this.props.addToFavorites(movie);
    }

    removeFromFavorites(id) {
        this.props.removeFromFavorites(id);
    }

    render() {
        return (
            <CardGrid 
                items={this.props.movies} 
                addToFavorites={this.addToFavorites.bind(this)} 
                removeFromFavorites={this.removeFromFavorites.bind(this)}
                favoritesMovies = {this.props.favoritesMovies}
            />
        )
    }
}

const mapStateToProps = function(state) {
    return {
        favoritesMovies: state.movies.favoritesMovies
    }
}

export default connect(
    mapStateToProps, 
    { addToFavorites, removeFromFavorites }
)(CardGridComponent);