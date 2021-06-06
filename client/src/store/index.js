import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
const userReducer = require("./userReducer");
const {applyMiddleware} = require("redux");
const thunk = require("redux-thunk");

const combine = combineReducers({
    user: userReducer
})

const store = createStore(combine, composeWithDevTools(applyMiddleware(thunk)))

export default store;