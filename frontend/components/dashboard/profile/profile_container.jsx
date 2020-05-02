import { connect } from 'react-redux';
import Profile from './profile';

const mSTP = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
})


export default connect(mSTP, null)(Profile);

// container does data fetching and then renders its corresponding sub-component
// container is connected to the Redux store and picks up the current state from the store
// container then structures the state
// container then passes the structured information to the component
