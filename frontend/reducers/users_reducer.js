import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const UsersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // return Object.assign({}, oldState, { [action.currentUser.id]: action.currentUser });
            return Object.assign({}, oldState, action.currentUser); 
            //because the whole user object and every parameter is extracted from show.json.jbuilder & _user.json.jbuilder,
            //above line is better to use
            //check out session_reducer.js

        default:
            return oldState;
    }
}

export default UsersReducer;