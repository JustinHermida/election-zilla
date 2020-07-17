export const REFRESH_ELECTIONS_REQUEST_ACTION = 'REFRESH_ELECTIONS_REQUEST';
export const REFRESH_ELECTIONS_DONE_ACTION = 'REFRESH_ELECTIONS_DONE';

export const VALIDATE_EMAIL_ACTION = "VALIDATE_EMAIL";
export const PREVIOUSLY_VOTED_ACTION = "PREVIOUSLY_VOTED"

export const createRefreshElectionsRequestAction = () => ({
    type: REFRESH_ELECTIONS_REQUEST_ACTION, 
});

export const createRefreshElectionsDoneAction = elections => ({
    type: REFRESH_ELECTIONS_DONE_ACTION,
    elections,
});

export const refreshElections = () => {

    return dispatch => {
      
      dispatch(createRefreshElectionsRequestAction());
      return fetch('http://localhost:3060/elections')
        .then(res => res.json())
        .then(elections => {
           dispatch(createRefreshElectionsDoneAction(elections))
        })
        .catch(error => {
          console.error(error);
        })
    }
};

export const validateEmailAction = (status) => ({
    type: VALIDATE_EMAIL_ACTION,
    status
});



export const emailValid = (email) => {
    return dispatch =>  {
        dispatch(validateEmailAction(email));

        return fetch('http://localhost:3060/voters')
          .then(res => res.json())
          .then(voters => {
            const voter = voters.find(voter => voter.email === email)
            if(!voter){
              // Voter's email is NOT in the DB
              return false
            }
            // Voter's email is in the DB
            return true
          })
          .catch(err => console.error(err))
    }
}

export const previouslyVotedAction = (status) => ({
  type: PREVIOUSLY_VOTED_ACTION,
  status
})

export const previouslyVoted = (email) => {
  return dispatch => {
    dispatch(previouslyVotedAction(email))
  }
}