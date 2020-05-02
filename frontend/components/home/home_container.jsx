import { connect } from 'react-redux';
import Home from './home';

                // 'root_reducer.js' keys
const mSTP = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
})

export default connect(mSTP, null)(Home);

// container does data fetching and then renders its corresponding sub-component
// container is connected to the Redux store and picks up the current state from the store
// container then structures the state
// container then passes the structured information to the component
