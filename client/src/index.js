import React from 'react';
import {render} from 'react-dom'
import App from "./App";
import store from "./store";
import {Provider} from "react-redux";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAMhqGqXEXMZh16XOyH6c7eHx3-XNwSLKs",
    authDomain: "chat-react-f6435.firebaseapp.com",
    projectId: "chat-react-f6435",
    storageBucket: "chat-react-f6435.appspot.com",
    messagingSenderId: "1027845649200",
    appId: "1:1027845649200:web:06aa79f40a5630e6a64ef5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)