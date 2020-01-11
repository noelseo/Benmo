import * as SessionApiUtil from '../util/session_api_util';

//action types
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

// receiveCurrentUser(currentUser)(regular action creator)
// logoutCurrentUser()(regular action creator)
// receiveErrors(errors)(regular action creator)
const receiveCurrentUser = (currentUser) => ({
    type: 'RECEIVE_CURRENT_USER', //type
    currentUser //payload { currentUser: currentUser }
})

const logoutCurrentUser = () => ({
    type: 'LOGOUT_CURRENT_USER'
})

export const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})



// signup(user)(thunk action creator)
// login(user)(thunk action creator)
// logout()(thunk action creator)
export const signup = (user) => dispatch => (
    SessionApiUtil.createUser(user)
        .then(
            (user) => dispatch(receiveCurrentUser(user)),
            (errors) => { return dispatch(receiveErrors(errors.responseJSON)) } //dispatches the action to the store, reducer picks it up from the store
            )
)

export const login = (user) => dispatch => (
    SessionApiUtil.loginUser(user)
        .then(
            (user) => dispatch(receiveCurrentUser(user)),
            (errors) => dispatch(receiveErrors(errors.responseJSON))
            )
)

export const logout = () => dispatch => (
    SessionApiUtil.logoutUser() //upon this being successful
        .then( //then do the below
            () => dispatch(logoutCurrentUser()), //dispatches(sends) the action to the appropriate reducer
            (errors) => dispatch(receiveErrors(errors))
        )
)

//session_reducer.js <- -> session_api_util.js
