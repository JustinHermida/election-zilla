import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { appReducer } from "../reducers/electionReducers";

export const appStore = createStore(
    appReducer,
    composeWithDevTools(applyMiddleware(thunk)),
);