import * as FriendsApiUtil from '../util/friends_api_util';

export const RECEIVE_ALL_FRIENDS = 'RECEIVE_ALL_FRIENDS';

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
