import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actionCreators from '../actions/action.creator.js';

class Discover extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let {dispatch} = this.props;
        dispatch(actionCreators.discoverMovies());
    }

    render() {
        return (
            <div>
                discover
            </div>
        )
    }
}
Discover.contextTypes = {
    store: PropTypes.object
}

const discoverContainer = connect()(Discover);

export default discoverContainer;