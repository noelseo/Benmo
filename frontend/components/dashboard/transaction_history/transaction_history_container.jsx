import { connect } from 'react-redux';
import TransactionHistory from './transaction_history';
import { getAll } from '../../../actions/transaction_actions';

const mSTP = ({ session, entities: { users, transactions } }) => {

    return ({
    currentUser: users[session.id],
    transactions
    })
}
const mDTP = dispatch => ({
    getAll: (user) => dispatch(getAll(user))
})

export default connect(mSTP, mDTP)(TransactionHistory);