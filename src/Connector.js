import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actionCreators from './actions/actions';
import App from './components/App.jsx';

function applyStatetoProps(state) {
    return {
        ...state
    }
}

function applyActionToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    }
}

const Connector = connect(applyStatetoProps, applyActionToProps)(App);

export default Connector;