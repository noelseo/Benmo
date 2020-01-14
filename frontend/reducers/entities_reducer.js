import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import TransactionsReducer from "./transactions_reducer";

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    transactions: TransactionsReducer
});

export default EntitiesReducer;