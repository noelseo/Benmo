import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { createATransaction } from '../../actions/transaction_actions';


const mSTP = ({ session, entities: { users } }) => {
    return ({ // 'root_reducer.js' keys
        currentUser: users[session.id]
    })
}

const mDTP = dispatch => ({
    createATransaction: (transaction, user) => dispatch(createATransaction(transaction, user))
})

export default connect(mSTP, mDTP)(Dashboard);
