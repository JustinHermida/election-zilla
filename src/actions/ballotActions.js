export const REFRESH_ELECTIONS_REQUEST_ACTION = 'REFRESH_ELECTIONS_REQUEST';
export const REFRESH_ELECTIONS_DONE_ACTION = 'REFRESH_ELECTIONS_DONE';

export const VALIDATE_EMAIL_REQUEST_ACTION = "VALIDATE_EMAIL_REQUEST";
export const VALIDATE_EMAIL_DONE_ACTION = "VALIDATE_EMAIL_DONE"
export const PREVIOUSLY_VOTED_REQUEST_ACTION = "PREVIOUSLY_VOTED_REQUEST"
export const PREVIOUSLY_VOTED_DONE_ACTION = "PREVIOUSLY_VOTED_DONE"

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

export const validateEmailAction = (email) => ({
    type: VALIDATE_EMAIL_REQUEST_ACTION,
    email
});

export const emailValid = (email, ballotId) => {
    return dispatch => {
        dispatch(validateEmailAction(email));

        return fetch('http://localhost:3060/voters')
          .then(res => res.json())
          .then(voters => {
            const voter = voters.find(voter => voter.email === email)
            if(!voter){
              // Voter's email is NOT in the DB
              console.log(`Did NOT find voter ID for : ${email}`)
              dispatch(emailValidateDoneAction(false))
            }else{
              // Voter's email is in the DB
              console.log(`Found: ${voter.id}`)
              dispatch(emailValidateDoneAction(true))
              dispatch(previouslyVoted(voter.id, ballotId))
            }
          })
          .catch(err => console.error(err))
    }
}

export const emailValidateDoneAction = valid => ({
  type: VALIDATE_EMAIL_DONE_ACTION,
  valid,
});

export const previouslyVotedAction = () => ({
  type: PREVIOUSLY_VOTED_REQUEST_ACTION,
});

export const previouslyVotedDoneAction = (status) => ({
  type: PREVIOUSLY_VOTED_DONE_ACTION,
  status
});

export const previouslyVoted = (voterId, ballotId) => {
  return dispatch => {
    console.log(`VoterID: ${voterId}`)
    dispatch(previouslyVotedAction())

    return fetch(`http://localhost:3060/elections/${ballotId}`)
    .then(res => res.json())
    .then(election => {
      console.log(`Found Elections: ${election.id}`)

      console.log(election.questions)
      const previouslyVoted = election.questions.filter(question => question.voterIds.includes(voterId))
      dispatch(previouslyVotedDoneAction(previouslyVoted.length > 0))
      console.log(`Previously Voted: ${previouslyVoted}`)
    })


  }
}

