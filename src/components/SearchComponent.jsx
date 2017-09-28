import React from 'react';
import ReactDOM from 'react-dom';
import InputContainer from '../containers/InputContainer';
import { connect } from 'react-redux';
import { searchMovies, discoverMovies } from '../actions/actions.js';

class SearchComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    searchMovies(event) {
        event.persist();
        clearTimeout(time);
        var time = setTimeout(() => {
            let query = event.target.value;
            if(query.length > 0) {
                this.props.searchMovies(query);
            } else {
                this.props.discoverMovies();
            }
        }, 600);
    }

    render() {
        return (
            <InputContainer searchMovies={this.searchMovies.bind(this)}/>
        )
    }
}

export default connect(null, { searchMovies, discoverMovies })(SearchComponent);