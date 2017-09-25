import ACTIONS from '../constants/actions';

const appState = function (state = {
    drawerOpen: false,
    title: "Main page"
}, action) {
    switch(action.type) {
        case ACTIONS.CHANGE_DRAWER_STATE:
            return {
                ...state,
                drawerOpen: action.payload
            }
        case ACTIONS.CHANGE_TITLE:
            return {
                ...state,
                title: action.payload
            }
        default:
            return state
    }
}

export default appState;