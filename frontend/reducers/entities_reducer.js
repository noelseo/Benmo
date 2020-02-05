import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
        // ↑ this name
import TransactionsReducer from "./transactions_reducer";
        // ↑ this name
import FriendsReducer from './friends_reducer';
        // ↑ this name
        

const EntitiesReducer = combineReducers({
    users: UsersReducer, 
           // ↑ this name
    transactions: TransactionsReducer,
                    // ↑ this name
    friends: FriendsReducer
                // ↑ this name
});

export default EntitiesReducer;