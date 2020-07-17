import {
  EDIT_VOTER_ACTION, CANCEL_VOTER_ACTION, REFRESH_VOTERS_DONE_ACTION, SORT_HEADER_REQUEST_ACTION
} from '../actions/voterToolActions';

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


export const sortVoterReducer = (headerColumn = "id", action) => {
  if(action.type === SORT_HEADER_REQUEST_ACTION) {
    return action.headerColumn;
  }
  return headerColumn;
};