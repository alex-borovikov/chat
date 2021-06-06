import {combineReducers, createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import userReducer from './userReducer'
import thunk from 'redux-thunk'


const combine = combineReducers({
    user: userReducer
})

const store = createStore(combine, composeWithDevTools(applyMiddleware(thunk)))

export default store;