export const REFRESH_ELECTIONS_REQUEST_ACTION = 'REFRESH_ELECTIONS_REQUEST';
export const REFRESH_ELECTIONS_DONE_ACTION = 'REFRESH_ELECTIONS_DONE';

export const VALIDATE_EMAIL_ACTION = "VALIDATE_EMAIL";

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

export const validateEmail = (email) => {
    return dispatch =>  {
        dispatch(validateEmailAction(email));

        // Is the user in the voter database?
        return fetch('http://localhost:3060/voters')
          .then(res => res.json())
          .then(voters => {
            const voter = voters.find(voter => voter.email === email)
            // The voter isn't in the database
            if(!voter){
              console.log(`Voter is not in the DB: ${email}`)
              return false
            }
            console.log(`Voter is in the DB: ${email}`)
            return true
          })
          .catch(err => console.error(err))
    }
}


