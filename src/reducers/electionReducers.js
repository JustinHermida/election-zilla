import { combineReducers } from 'redux';
import { votersReducer, editVoterIdReducer } from './voterToolReducers';
import {ADD_BALLOT_QUESTION_ACTION, CLEAR_BALLOT_QUESTIONS_ACTION} from "../actions/electionActions";

export const electionReducer = (elections = [], action) => {
    // Placeholder
    return[];
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