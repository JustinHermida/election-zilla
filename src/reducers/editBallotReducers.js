import {
  VALIDATE_EMAIL_DONE_ACTION,
  PREVIOUSLY_VOTED_DONE_ACTION
} from '../actions/ballotActions';

export const emailValidReducer = (valid = false, action) => {
  if (action.type === VALIDATE_EMAIL_DONE_ACTION){
    return action.valid
  }

  return valid
};

export const previouslyVotedReducer = (status = {}, action) => {
  if (action.type === PREVIOUSLY_VOTED_DONE_ACTION){
    return action.status
  }

  return status
};