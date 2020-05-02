import { connect } from 'react-redux';
import Payees from './payees';
import { fetchAllFriends, clearFriends } from '../../../actions/friend_actions';


const mSTP = ({ session, entities: { users, friends } }) => {
    return ({ // 'root_reducer.js' keys
        currentUser: users[session.id],
        friends: Object.values(friends)
    })
}


const mDTP = dispatch => ({
    fetchAllFriends: (user) => dispatch(fetchAllFriends(user)),
    clearFriends: () => dispatch(clearFriends())
})




export default connect(mSTP, mDTP)(Payees);

// container does data fetching and then renders its corresponding sub-component
// container is connected to the Redux store and picks up the current state from the store
// container then structures the state
// container then passes the structured information to the component
