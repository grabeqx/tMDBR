import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { discoverMovies, changeTitle } from '../actions/actions.js';
import CardGridComponent from './CardGridComponent';
import SearchComponent from './SearchComponent';

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
                <SearchComponent />
                <CardGridComponent movies={this.props.movies} />
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