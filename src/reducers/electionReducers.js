import { combineReducers } from 'redux';
import { votersReducer, editVoterIdReducer } from './voterToolReducers';

// export const voterReducer = (voters = [], action) => {
//     // Placeholder
//     return [];
// };

export const electionReducer = (elections = [], action) => {
    // Placeholder
    return[];
};

export const appReducer = combineReducers({
    voters: votersReducer,
    editVoterId: editVoterIdReducer,
    elections: electionReducer,
});