import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import Navbar from './navbar';

const mSTP = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
})

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(Navbar);

// container does data fetching and then renders its corresponding sub-component
// container is connected to the Redux store and picks up the current state from the store
// container then structures the state
// container then passes the structured information to the component
