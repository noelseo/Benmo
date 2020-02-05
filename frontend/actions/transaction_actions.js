import * as TransactionApiUtil from '../util/transaction_api_util';

export const RECEIVE_ALL_TRANSACTIONS = 'RECEIVE_ALL_TRANSACTIONS';
export const CLEAR_TRANSACTIONS = 'CLEAR_TRANSACTIONS';


//ACTION: #1 way of writing a method
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


//ACTION: #2 way of writing a method
// create a transaction
// export const createATransaction = (transaction, user) => (
//     TransactionApiUtil.createATransaction(transaction, user)
//         .then(
//             (transaction) => dispatch({ type: CREATE_A_TRANSACTION, transaction }), //WRONG!!!!!!!!!!!!
//             (errors) => { return dispatch(receiveErrors(errors.responseJSON)) }
//         )
// )


export const createATransaction = (transaction, user) => dispatch => ( //action creator
    TransactionApiUtil.createATransaction(transaction, user) // 1. if this is successful,
        .then( // 2. it dispatches the below action
            (transactions) => dispatch(receiveAllTransactions(transactions)) //once the transaction is created in the db, we want to get the list of ALL transactions
            //above 'transactions' is the return value after the ajax call is completed

            // (errors) => { return dispatch(receiveErrors(errors.responseJSON)) }
        )
)

// 3. reducer listens to the dispatch and according to the 'type', reducer runs 