import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import TransactionsReducer from "./transactions_reducer";
import FriendsReducer from './friends_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    transactions: TransactionsReducer,
    friends: FriendsReducer
});

export default EntitiesReducer;