import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

import { voterReducer } from '../reducers/voterToolReducers';

export const voterToolStore = createStore(voterReducer);