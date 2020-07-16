import { combineReducers } from 'redux';
import { votersReducer, editVoterIdReducer } from './voterToolReducers';
import {ADD_BALLOT_QUESTION_ACTION, CLEAR_BALLOT_QUESTIONS_ACTION} from "../actions/electionActions";

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

export const appReducer = combineReducers({
    voters: votersReducer,
    editVoterId: editVoterIdReducer,
    elections: electionReducer,
    ballotQuestions: ballotQuestionsReducer,
    clearBallotQuestions: clearBallotQuestionsReducer,
});