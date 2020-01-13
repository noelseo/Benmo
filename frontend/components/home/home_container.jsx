import { connect } from 'react-redux';
import Home from './home';

const mSTP = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
})


export default connect(mSTP, null)(Home);