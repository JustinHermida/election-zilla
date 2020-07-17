export const REFRESH_VOTERS_REQUEST_ACTION = 'REFRESH_VOTERS_REQUEST';
export const REFRESH_VOTERS_DONE_ACTION = 'REFRESH_VOTERS_DONE';

export const ADD_VOTER_REQUEST_ACTION = 'ADD_VOTER_REQUEST';
export const SAVE_VOTER_REQUEST_ACTION = 'SAVE_VOTER_REQUEST';
export const DELETE_VOTER_REQUEST_ACTION = 'DELETE_VOTER_REQUEST';

export const EDIT_VOTER_ACTION = 'EDIT_VOTER';
export const CANCEL_VOTER_ACTION = 'CANCEL_VOTER';

export const SORT_HEADER_REQUEST_ACTION = 'SORT_HEADER';

export const createRefreshVotersRequestAction = () => ({
  type: REFRESH_VOTERS_REQUEST_ACTION,
});

export const createRefreshVotersDoneAction = voters => ({
  type: REFRESH_VOTERS_DONE_ACTION,
  voters,
});

export const refreshVoters = () => {

  return dispatch => {

    dispatch(createRefreshVotersRequestAction());
    return fetch('http://localhost:3060/voters')
      .then(res => res.json())
      .then(voters => dispatch(createRefreshVotersDoneAction(voters)));

  };

};

export const createAddVoterRequestAction = voter =>
  ({ type: ADD_VOTER_REQUEST_ACTION, voter });

export const addVoter = voter => {

  return dispatch => {

    dispatch(createAddVoterRequestAction(voter));
    return fetch('http://localhost:3060/voters', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(voter),
    })
      .then(() => dispatch(refreshVoters()));
  };
};

export const createSaveVoterRequestAction = voter =>
  ({ type: SAVE_VOTER_REQUEST_ACTION, voter });

export const saveVoter = voter => {

  return dispatch => {

    dispatch(createSaveVoterRequestAction(voter));
    return fetch('http://localhost:3060/voters/' + encodeURIComponent(voter.id), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(voter),
    })
      .then(() => dispatch(refreshVoters()));

  };
  
}

export const createDeleteVoterRequestAction = voterId =>
  ({ type: DELETE_VOTER_REQUEST_ACTION, voterId });

export const deleteVoter = voterId => {

  return dispatch => {

    dispatch(createDeleteVoterRequestAction(voterId));
    return fetch('http://localhost:3060/voters/' + encodeURIComponent(voterId), {
      method: 'DELETE',
    })
      .then(() => dispatch(refreshVoters()));

  };
  
};

export const sortHeaderRequestAction = headerColumn => 
  ({ type: SORT_HEADER_REQUEST_ACTION, headerColumn });


export const createEditVoterAction = voterId =>
  ({ type: EDIT_VOTER_ACTION, voterId });
export const createCancelVoterAction = () =>
  ({ type: CANCEL_VOTER_ACTION });