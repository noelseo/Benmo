import { RECEIVE_ALL_FRIENDS, CLEAR_FRIENDS, RECEIVE_A_FRIEND } from '../actions/friend_actions';

const FriendsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState)

    switch (action.type) {
        case RECEIVE_ALL_FRIENDS:

            Object.keys(action.friends).forEach(id => (
                newState[id] = action.friends[id]
            ))

            return newState;

        case CLEAR_FRIENDS:
            return {};

        //////
        // case RECEIVE_A_FRIEND:
        //     newState[id] = action.friend[id]
        //     return newState;

        default:
            return oldState;
    }
}

export default FriendsReducer;
