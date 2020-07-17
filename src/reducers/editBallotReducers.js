import {
  VALIDATE_EMAIL_ACTION
} from '../actions/ballotActions';

const emailValidReducer = (valid = false, action) => {
  if (action.type === VALIDATE_EMAIL_ACTION){
    return action.emailValid
  }

  return valid
}