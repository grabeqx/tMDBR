import ACTIONS from '../constants/actions';

export function changeDrawerState(state) {
    return {
        type: ACTIONS.CHANGE_DRAWER_STATE,
        payload: state
    }
}