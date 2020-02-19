import { connect } from 'react-redux';
import Friends from './friends';
import { fetchAllFriends, clearFriends } from '../../../actions/friend_actions';
import { createATransaction } from '../../../actions/transaction_actions';


const mSTP = ({ session, entities: { users, friends, transactions } }) => {
    return ({ // 'root_reducer.js' keys
        currentUser: users[session.id],
        friends: Object.values(friends),
        transactions: Object.values(transactions).reverse()
    })
}


const mDTP = dispatch => ({
    fetchAllFriends: (user) => dispatch(fetchAllFriends(user)), //
    clearFriends: () => dispatch(clearFriends()),
    createATransaction: (transaction, user) => dispatch(createATransaction(transaction, user))
})




export default connect(mSTP, mDTP)(Friends);



//container is connected to the Redux store and picks up the current state from the store
//container then structures the state
//container then passes the structured information to the component
