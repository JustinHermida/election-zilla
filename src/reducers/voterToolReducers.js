import { combineReducers } from "redux";

import {
  EDIT_VOTER_ACTION, CANCEL_VOTER_ACTION, REFRESH_VOTERS_DONE_ACTION
} from '../actions/voterToolActions';

// const initialVoters = [
//     {id:  1, firstName: "Bob", lastName:  "Smith", address: "123 st", city: "San Francisco", birthdate: "01/01/1990", email: "abc@gmail.com", phone: 12345678910},
// ];

export const votersReducer = (voters = [], action) => {

  switch (action.type) {
    case REFRESH_VOTERS_DONE_ACTION:
      return action.voters
    default:
      return voters;
  }

};

export const editVoterIdReducer = (editVoterId = -1, action) => {

  if (action.type === EDIT_VOTER_ACTION) {
    return action.voterId;
  }

  if ([
     CANCEL_VOTER_ACTION,
     REFRESH_VOTERS_DONE_ACTION
  ].includes(action.type)) {
    return -1;
  }

  return editVoterId;

};