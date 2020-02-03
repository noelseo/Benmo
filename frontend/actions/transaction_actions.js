import * as TransactionApiUtil from '../util/transaction_api_util';

export const RECEIVE_ALL_TRANSACTIONS = 'RECEIVE_ALL_TRANSACTIONS';
export const CLEAR_TRANSACTIONS = 'CLEAR_TRANSACTIONS';
export const CREATE_A_TRANSACTION = 'CREATE_A_TRANSACTION';

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


//to clear the errors
export const clearTransactions = () => ({
    type: CLEAR_TRANSACTIONS
})


export const createATransaction = (transaction) => (
    TransactionApiUtil.createATransaction(transaction)
        .then(
            (transaction) => dispatch({ type: CREATE_A_TRANSACTION, transaction }),
            (errors) => { return dispatch(receiveErrors(errors.responseJSON)) }
        )
)