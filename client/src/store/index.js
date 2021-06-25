import {combineReducers, createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import userReducer from './userReducer'
import chatReducer from "./chatReducer";
import thunk from 'redux-thunk'


const combine = combineReducers({
    user: userReducer,
    chat: chatReducer
})

const store = createStore(combine, composeWithDevTools(applyMiddleware(thunk)))

export default store;