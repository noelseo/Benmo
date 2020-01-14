import * as TransactionApiUtil from '../util/transaction_api_util';

export const RECEIVE_ALL_TRANSACTIONS = 'RECEIVE_ALL_TRANSACTIONS';

const receiveAllTransactions = (transactions) => ({
    type: 'RECEIVE_ALL_TRANSACTIONS',
    transactions 
})

export const getAll = (user) => dispatch => (
    TransactionApiUtil.receiveAllTransactions(user)
        .then(
            (transactions) => dispatch(receiveAllTransactions(transactions)),
            (errors) => { return dispatch(receiveErrors(errors.responseJSON)) }
        )
)
