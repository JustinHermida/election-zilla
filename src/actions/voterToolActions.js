export const ADD_VOTER_ACTION = 'ADD_VOTER';
export const SAVE_VOTER_ACTION = 'SAVE_VOTER';
export const DELETE_VOTER_ACTION = 'DELETE_VOTER';
export const EDIT_VOTER_ACTION = 'EDIT_VOTER';
export const CANCEL_VOTER_ACTION = 'CANCEL_VOTER';

export const createAddVoterAction = voter =>
  ({ type: ADD_VOTER_ACTION, voter });
export const createSaveVoterAction = voter =>
  ({ type: SAVE_VOTER_ACTION, voter });
export const createDeleteVoterAction = voterId =>
  ({ type: DELETE_VOTER_ACTION, voterId });
export const createEditVoterAction = voterId =>
  ({ type: EDIT_VOTER_ACTION, voterId });
export const createCancelVoterAction = () =>
  ({ type: CANCEL_VOTER_ACTION });