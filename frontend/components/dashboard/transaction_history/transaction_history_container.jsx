import { connect } from 'react-redux';
import TransactionHistory from './transaction_history';
import { fetchAll, clearTransactions } from '../../../actions/transaction_actions';


const mSTP = ({ session, entities: { users, transactions } }) => {
    return({
            // 'root_reducer.js' keys
    currentUser: users[session.id],
    transactions: Object.values(transactions).reverse()
})
}
//EXAMPLE
//user: chris
// { "transactions": { 
    // "14": { 
    //     "id": 14, "amount": 593.1, "sender_id": 9, "receiver_id": 7, "created_at": "2020-01-15T04:43:06.897Z", 
    //     "sender": {
    //          "id": 9, "first_name": "Chris", "last_name": "Nguyen", "email": "chris@benmo.com", "phone_number": "4911039829", "username": "c-n-2", "balance": 420.94, "password_digest": "$2a$12$m6l0EGN8u21ADykRVj0Dl.ppptRGAD8eo.tJk3xCP2L1KChdbpxqq", "session_token": "lLjUVM9JAvEi3Q4M358GJg", "created_at": "2020-01-15T04:43:05.234Z", "updated_at": "2020-01-15T04:43:05.234Z" }, 
    //     "receiver": {
    //               "id": 7, "first_name": "Ben", "last_name": "Mo", "email": "benmo@benmo.com", "phone_number": "4151234567", "username": "b-h-13", "balance": 3723.58, "password_digest": "$2a$12$HgGpayDHATUoHHR.wp/19O5K5jzmaxeNA8g0lEEbAVRbVmPJ1G81.", "session_token": "oWdkKPNnarPBgdTjeHw1FQ", "created_at": "2020-01-15T04:43:04.579Z", "updated_at": "2020-01-15T04:43:04.579Z" } 
    //             } 
    //         } 
    //     }



//another way to write the above
// const mSTP = state => ({
//     currentUser: state.entities.users[state.session.id],
//     transactions: state.entities.transactions
// })



const mDTP = dispatch => ({
    fetchAll: (user) => dispatch(fetchAll(user)), //fetchAll function comes from 'transaction_actions.js'
    clearTransactions: () => dispatch(clearTransactions())
})

export default connect(mSTP, mDTP)(TransactionHistory);



//container is connected to the Redux store and picks up the current state from the store
//container then structures the state
//container then passes the structured information to the component
