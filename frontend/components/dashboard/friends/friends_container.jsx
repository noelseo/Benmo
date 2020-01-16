import { connect } from 'react-redux';
import Friends from './friends';
import { fetchAllFriends } from '../../../actions/friend_actions';


const mSTP = ({ session, entities: { users, friends } }) => {
    return ({ // 'root_reducer.js' keys
        currentUser: users[session.id],
        friends: Object.values(friends)
    })
}


const mDTP = dispatch => ({
    fetchAllFriends: (user) => dispatch(fetchAllFriends(user))
})

export default connect(mSTP, mDTP)(Friends);



//container is connected to the Redux store and picks up the current state from the store
//container then structures the state
//container then passes the structured information to the component
