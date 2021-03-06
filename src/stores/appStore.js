import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { appReducer } from "../reducers/appReducers";

export const appStore = createStore(
    appReducer,
    composeWithDevTools(applyMiddleware(thunk)),
);