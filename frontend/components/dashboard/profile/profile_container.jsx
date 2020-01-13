import { connect } from 'react-redux';
import Profile from './profile';

const mSTP = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
})


export default connect(mSTP, null)(Profile);