import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { configureStore } from "./store";
import { setAuthorizationToken, setCurrentUser } from './store/actions/auth';
import jwtDecode from 'jwt-decode';

const store = configureStore();

if(localStorage.jwtToken) {
    setAuthorizationToken(localStorage.jwtToken);
    try {
         store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)))
    } catch (e) {
        store.dispatch(setCurrentUser({}))
    }
}


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
