import { combineReducers } from "redux";

import {
  ADD_VOTER_ACTION, SAVE_VOTER_ACTION, DELETE_VOTER_ACTION,
  EDIT_VOTER_ACTION, CANCEL_VOTER_ACTION,
} from '../actions/voterToolActions';

const initialVoters = [
    {id:  1, firstName: "Bob", lastName:  "Smith", address: "123 st", city: "San Francisco", birthdate: "01/01/1990", email: "abc@gmail.com", phone: 12345678910},
];

export const votersReducer = (voters = initialVoters, action) => {

  switch (action.type) {
    case ADD_VOTER_ACTION:
      return voters.concat({
        ...action.voter,
        id: Math.max(...voters.map(v => v.id), 0) + 1,
      });
    case SAVE_VOTER_ACTION:
      const voterIndex = voters.findIndex(v => v.id === action.voter.id);
      const newVoters = voters.concat();
      newVoters[voterIndex] = action.voter;
      return newVoters;
    case DELETE_VOTER_ACTION:
      return voters.filter(v => v.id !== action.voterId);
    default:
      return voters;
  }

};

export const editVoterIdReducer = (editVoterId = -1, action) => {

  if (action.type === EDIT_VOTER_ACTION) {
    return action.voterId;
  }

  if ([
    ADD_VOTER_ACTION, SAVE_VOTER_ACTION,
    DELETE_VOTER_ACTION, CANCEL_VOTER_ACTION
  ].includes(action.type)) {
    return -1;
  }

  return editVoterId;

};

export const voterReducer = combineReducers({
  voters: votersReducer,
  editVoterId: editVoterIdReducer,
});