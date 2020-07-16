import { combineReducers } from 'redux';

export const voterReducer = (voters = [], action) => {

};

export const electionReducer = (elections = [], action) => {

};

export const appReducer = combineReducers({
    voters: voterReducer,
    elections: electionReducer,
});