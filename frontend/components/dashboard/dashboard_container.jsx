import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { createATransaction } from '../../actions/transaction_actions';

                // 'root_reducer.js' keys
const mSTP = ({ session, entities: { users, transactions } }) => {
    return ({ 
        currentUser: users[session.id],
        transactions_length: Object.values(transactions).length
    })
}

const mDTP = dispatch => ({
    createATransaction: (transaction, user) => dispatch(createATransaction(transaction, user))
})

export default connect(mSTP, mDTP)(Dashboard);

// container does data fetching and then renders its corresponding sub-component
// container is connected to the Redux store and picks up the current state from the store
// container then structures the state
// container then passes the structured information to the component
