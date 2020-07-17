export const REFRESH_ELECTIONS_REQUEST_ACTION = 'REFRESH_ELECTIONS_REQUEST';
export const REFRESH_ELECTIONS_DONE_ACTION = 'REFRESH_ELECTIONS_DONE';

export const VALIDATE_EMAIL_REQUEST_ACTION = "VALIDATE_EMAIL_REQUEST";
export const VALIDATE_EMAIL_DONE_ACTION = "VALIDATE_EMAIL_DONE";
export const PREVIOUSLY_VOTED_REQUEST_ACTION = "PREVIOUSLY_VOTED_REQUEST";
export const PREVIOUSLY_VOTED_DONE_ACTION = "PREVIOUSLY_VOTED_DONE";

export const ON_VOTE_REQUEST_ACTION = "ON_VOTE_REQUEST";
export const UPDATE_ELECTION_REQUEST_ACTION = "UPDATE_ELECTION_REQUEST";

export const ON_CAST_VOTE_ACTION = "ON_CAST_VOTE_REQUEST";

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
            const voter = voters.find(voter => voter.email === email);
            if(!voter){
              // Voter's email is NOT in the DB
              dispatch(emailValidateDoneAction(false));
            }else{
              // Voter's email is in the DB
              dispatch(emailValidateDoneAction(true));
              dispatch(previouslyVoted(voter.id, ballotId))
            }
          })
          .catch(err => console.error(err))
    }
};

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

    dispatch(previouslyVotedAction());

    return fetch(`http://localhost:3060/elections/${ballotId}`)
    .then(res => res.json())
    .then(election => {
      const previouslyVoted = election.questions.filter(question => question.voterIds.includes(voterId));
      dispatch(previouslyVotedDoneAction({voted: previouslyVoted.length > 0, voterId}));
    })
  }
};

export const onVoteRequestAction = (ballotId, questionId, checked) => ({
   type: ON_VOTE_REQUEST_ACTION,
   ballotId,
   questionId,
   checked,
});

export const updateElectionAction = () => ({
    type: UPDATE_ELECTION_REQUEST_ACTION,
});

export const updateElection = (election) => {
    console.log(election);
    return dispatch => {
        dispatch(updateElectionAction());

        return fetch(`http://localhost:3060/elections/${election.id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(election),
        })
    }
};

export const onVoteRequest = (ballotId, questionId, checked) => {
    return dispatch => {
        dispatch(onVoteRequestAction(ballotId, questionId, checked));

        return fetch(`http://localhost:3060/elections/${ballotId}`)
            .then(res => res.json())
            .then(election => {
                const question = election.questions.find(question => question.id === questionId);

                if(checked) {
                    question.count++;
                } else {
                    question.count--;
                }
                return election;
            }).then(election => {
                dispatch(updateElection(election))
            });
    }
};

export const onCastVoteAction = () => ({
    type: ON_VOTE_REQUEST_ACTION,
});

export const castVote = (ballotId, voterId) => {
    console.log(ballotId + " " + voterId);
  return dispatch => {
      dispatch(onCastVoteAction());

      return fetch(`http://localhost:3060/elections/${ballotId}`)
          .then(res => res.json())
          .then(election => {
              election.questions.forEach(question => {
                 question.voterIds.push(voterId);
              });
              return election;
          }).then(election => {
              dispatch(updateElection(election))
          });
  }
};

