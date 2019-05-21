import rootReducer from "./reducers";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export function configureStore() {
    return createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
    );
}
