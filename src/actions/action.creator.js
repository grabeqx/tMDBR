import ACTIONS from '../constants/actions';

const actionCreators = {
    discoverMovies: function() {
        return {
            type: ACTIONS.DISCOVER_MOVIE
        }
    }
}

export default actionCreators;