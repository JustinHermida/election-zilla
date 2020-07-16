import { combineReducers } from 'redux';

import { 
    REFRESH_ELECTIONS_DONE_ACTION
} 
from '../actions/electionActions'

export const voterReducer = (voters = [], action) => {
    // Placeholder
    return [];
};

export const electionReducer = (elections = [], action) => {
    if (action.type === REFRESH_ELECTIONS_DONE_ACTION) {
        return action.elections;
    }

    return elections;
};

export const appReducer = combineReducers({
    voters: voterReducer,
    elections: electionReducer,
});