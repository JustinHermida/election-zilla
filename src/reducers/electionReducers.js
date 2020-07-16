import { combineReducers } from 'redux';

export const voterReducer = (voters = [], action) => {
    // Placeholder
    return [];
};

export const electionReducer = (elections = [], action) => {
    // Placeholder
    return[];
};

export const appReducer = combineReducers({
    voters: voterReducer,
    elections: electionReducer,
});