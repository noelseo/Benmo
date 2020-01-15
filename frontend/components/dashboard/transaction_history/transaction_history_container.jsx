import { connect } from 'react-redux';
import TransactionHistory from './transaction_history';
import { fetchAll } from '../../../actions/transaction_actions';

const mSTP = ({ session, entities: { users, transactions } }) => ({
            // 'root_reducer.js' keys
    currentUser: users[session.id],
    transactions: Object.values(transactions).reverse()
})

//another way to write the above
// const mSTP = state => ({
//     currentUser: state.entities.users[state.session.id],
//     transactions: state.entities.transactions
// })



const mDTP = dispatch => ({
    fetchAll: (user) => dispatch(fetchAll(user)) //fetchAll function comes from 'transaction_actions.js'
}) //

export default connect(mSTP, mDTP)(TransactionHistory);



//container is connected to the Redux store and picks up the current state from the store
//container then structures the state
//container then passes the structured information to the component
