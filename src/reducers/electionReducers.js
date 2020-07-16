import { combineReducers } from 'redux';

import {REFRESH_ELECTIONS_DONE_ACTION, SAVE_BALLOT_REQUEST_ACTION} from "../actions/electionActions";

export const voterReducer = (voters = [], action) => {
    // Placeholder
    return [];
};

export const electionsReducer = (elections = [], action) => {

    if(action.type === REFRESH_ELECTIONS_DONE_ACTION) {
        return action.elections;
    }

    return elections;
};

export const isLoadingReducer = (isLoading = false, action) => {

    if (action.type.endsWith('_REQUEST')) {
        return true;
    }

    if (action.type.endsWith('_DONE')) {
        return false;
    }

    return isLoading;
};

export const appReducer = combineReducers({
    isLoading: isLoadingReducer,
    voters: voterReducer,
    elections: electionsReducer,
});