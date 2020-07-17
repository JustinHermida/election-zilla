import { combineReducers } from 'redux';

import { votersReducer, editVoterIdReducer } from './voterToolReducers';
import {
    ADD_BALLOT_QUESTION_ACTION,
    CLEAR_BALLOT_QUESTIONS_ACTION, ON_REFRESH_BALLOT_RESULTS_ID_ACTION,
    REFRESH_ELECTIONS_DONE_ACTION, VIEW_BALLOT_RESULTS_ACTION
} from "../actions/electionActions";

export const electionReducer = (elections = [], action) => {
    if(action.type === REFRESH_ELECTIONS_DONE_ACTION) {
        return action.elections;
    }

    return elections;
};

export const ballotQuestionsReducer = (questions = [], action) => {
  if(action.type === ADD_BALLOT_QUESTION_ACTION) {
      return action.ballotQuestions;
  }

  return questions;
};

export const clearBallotQuestionsReducer = (questions = [], action) => {
    if(action.type === CLEAR_BALLOT_QUESTIONS_ACTION) {
        return action.ballotQuestions;
    }

    return questions;
};

export const addViewResultsReducer = (ballotId = -1, action) => {
    if(action.type === VIEW_BALLOT_RESULTS_ACTION || action.type === ON_REFRESH_BALLOT_RESULTS_ID_ACTION) {
        return action.ballotId;
    }

    return ballotId;
};


export const appReducer = combineReducers({
    voters: votersReducer,
    editVoterId: editVoterIdReducer,
    elections: electionReducer,
    ballotQuestions: ballotQuestionsReducer,
    clearBallotQuestions: clearBallotQuestionsReducer,
    ballotResultsId: addViewResultsReducer,
});