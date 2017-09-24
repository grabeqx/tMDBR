import ACTIONS from '../constants/actions';

const appState = function (state = {
    drawerOpen: false
}, action) {
    switch(action.type) {
        case ACTIONS.CHANGE_DRAWER_STATE:
            return {
                ...state,
                drawerOpen: action.payload
            }
        default:
            return state
    }
}

export default appState;