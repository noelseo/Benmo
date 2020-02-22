import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { createATransaction } from '../../actions/transaction_actions';


const mSTP = ({ session, entities: { users, transactions } }) => {
    return ({ // 'root_reducer.js' keys
        currentUser: users[session.id],
        transactions_length: Object.values(transactions).length
    })
}

const mDTP = dispatch => ({
    createATransaction: (transaction, user) => dispatch(createATransaction(transaction, user))
})

export default connect(mSTP, mDTP)(Dashboard);
