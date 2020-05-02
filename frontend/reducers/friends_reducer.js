import { RECEIVE_ALL_FRIENDS, CLEAR_FRIENDS } from '../actions/friend_actions';

const FriendsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_FRIENDS:
            // debugger;
            Object.keys(action.friends).forEach(id => ( // reconstructing the json object
                newState[id] = action.friends[id]
            )) 
            return newState;

        case CLEAR_FRIENDS:
            return {};

        default:
            return oldState;
    }
}

export default FriendsReducer;


