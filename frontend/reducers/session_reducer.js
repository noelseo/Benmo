import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

const SessionReducer = (oldState = { id: null }, action) => { //grabs the appropriate action from session_actions.js
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id }; 

        case LOGOUT_CURRENT_USER:
            return { id: null };

        default:
            return oldState;
    }
};

export default SessionReducer;

