import * as FriendsApiUtil from '../util/friends_api_util';

export const RECEIVE_ALL_FRIENDS = 'RECEIVE_ALL_FRIENDS';
export const CLEAR_FRIENDS = 'CLEAR_FRIENDS';

///////
// export const RECEIVE_A_FRIEND = 'RECEIVE_A_FRIEND';

const receiveAllFriends = (friends) => ({ //take the ajax object as an arg
    type: RECEIVE_ALL_FRIENDS, //reducer listens 
    friends: friends
})

export const fetchAllFriends = (user) => dispatch => ( 
    FriendsApiUtil.receiveAllFriends(user)
        .then(
            (user) => dispatch(receiveAllFriends(user)),
            (errors) => { return dispatch(receiveErrors(errors.responseJSON)) }
        )
)

//to clear the errors
export const clearFriends = () => ({
    type: CLEAR_FRIENDS
})


// ////////
// export const fetchAFriend = (userId) => dispatch => (
//     FriendsApiUtil.receiveAFriend(userId)
//         .then(
//             (friend) => dispatch({ type: RECEIVE_A_FRIEND, friend })
//         )
// )