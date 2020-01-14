import { RECEIVE_ALL_TRANSACTIONS } from '../actions/transaction_actions';

const TransactionsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_ALL_TRANSACTIONS:
            // return Object.assign({}, oldState, { [action.currentUser.id]: action.currentUser });
            Object.keys(action.transactions).forEach(id => (
                newState[id] = action.transactions.id
            ))
            return newState;

        default:
            return oldState;
    }
}

export default TransactionsReducer;