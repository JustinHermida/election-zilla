import { combineReducers } from 'redux';

import { votersReducer, editVoterIdReducer } from './voterToolReducers';

import {
    ADD_BALLOT_QUESTION_ACTION,
    ADD_VIEW_RESULTS_ACTION,
    CLEAR_BALLOT_QUESTIONS_ACTION,
    REFRESH_ELECTIONS_DONE_ACTION
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

export const addViewResultsReducer = (viewResults = {}, action) => {
  if(action.type === ADD_VIEW_RESULTS_ACTION) {
      const newViewResults = {...viewResults};

      const questionIds = newViewResults[action.electionId];

      if(questionIds) {
          questionIds.push(action.questionId);
      } else {
          newViewResults[action.electionId] = [action.questionId];
      }

      return newViewResults;
  }

  return viewResults;
};


export const appReducer = combineReducers({
    voters: votersReducer,
    editVoterId: editVoterIdReducer,
    elections: electionReducer,
    ballotQuestions: ballotQuestionsReducer,
    clearBallotQuestions: clearBallotQuestionsReducer,
    viewResults: addViewResultsReducer,
});