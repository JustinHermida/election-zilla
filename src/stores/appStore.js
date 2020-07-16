import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {appReducer} from "../reducers/electionReducers";
// import { voterReducer } from '../reducers/voterToolReducers';

// export const appReducers = combineReducers({
//     voterReducer,
//     appReducer,
//   });

export const appStore = createStore(
    appReducer,
    composeWithDevTools(applyMiddleware(thunk)),
);