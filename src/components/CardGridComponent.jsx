import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import CardGrid from '../containers/CardGrid';

class CardGridComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CardGrid 
                items={this.props.movies} 
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
    null
)(CardGridComponent);