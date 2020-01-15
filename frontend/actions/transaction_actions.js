import * as TransactionApiUtil from '../util/transaction_api_util';

export const RECEIVE_ALL_TRANSACTIONS = 'RECEIVE_ALL_TRANSACTIONS';

//ACTION
const receiveAllTransactions = ({ transactions }) => ({ //take the ajax object as an arg
    type: RECEIVE_ALL_TRANSACTIONS, //reducer listens 
    transactions: transactions
})

export const fetchAll = (user) => dispatch => (  //this gets used in transaction_history.jsx
    TransactionApiUtil.receiveAllTransactions(user)
        .then(
            (transactions) => dispatch(receiveAllTransactions(transactions)), 
            //same as dispatch({ type: RECEIVE_ALL_TRANSACTIONS, transactions }) 
            //'transactions' is the ajax object received from 'transaction_api_util.js'
        

            (errors) => { return dispatch(receiveErrors(errors.responseJSON)) }
        )
)


//------------------------------------------
import { SessionApiUtil } from '../util/session_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const fetchUser = (userId) => dispatch => (
    SessionApiUtil.fetchUser(userId)
        .then(
            (userId) => dispatch({ type: RECEIVE_USER, userId })
        )
)