import { RECEIVE_ALL_TRANSACTIONS, CLEAR_TRANSACTIONS } from '../actions/transaction_actions';

const TransactionsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState)

    switch (action.type) {
        case RECEIVE_ALL_TRANSACTIONS: //reducer heard it from 'transaction_actions.js'

            if (!action.payload.transactions) return oldState;

            Object.keys(action.payload.transactions).forEach(
              id => (newState[id] = action.payload.transactions[id])
            );

            //action -> line 6 in 'transaction_actions.js'
            //action is -> { type: RECEIVE_ALL_TRANSACTIONS, transactions: transactions_object }
                
            return newState; 

        case CLEAR_TRANSACTIONS:
            return {};

        default:
            return oldState;
    }
}

export default TransactionsReducer;


// { 
//     0: { id: 8, amount: 53, sender_id: 18, receiver_id: 13, created_at: "2020-01-14T03:08:37.504Z" },
//     1: { id: 11, amount: 593.1, sender_id: 15, receiver_id: 13, created_at: "2020-01-14T03:08:37.517Z" },
//     2: { id: 12, amount: 278.27, sender_id: 14, receiver_id: 13, created_at: "2020-01-14T03:08:37.521Z" },
//     3: { id: 15, amount: 593.31, sender_id: 18, receiver_id: 13, created_at: "2020-01-14T03:08:37.535Z" }
// }

//Ruby way
// [0, 1, 2, 3].each { |id| newState[id] = action.transations[id] }
//                                  (key)        (value)
