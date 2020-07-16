export const REFRESH_ELECTIONS_REQUEST_ACTION = 'REFRESH_ELECTIONS_REQUEST';
export const REFRESH_ELECTIONS_DONE_ACTION = 'REFRESH_ELECTIONS_DONE';

export const SAVE_BALLOT_REQUEST_ACTION = 'SAVE_BALLOT_REQUEST';
export const ADD_BALLOT_QUESTION_ACTION = 'ADD_BALLOT_QUESTION';
export const CLEAR_BALLOT_QUESTIONS_ACTION = 'CLEAR_BALLOT_QUESTIONS';


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

export const createSaveBallotRequestAction = ballot => ({
    type: SAVE_BALLOT_REQUEST_ACTION, ballot
});

export const saveBallot = ballot => {
    return dispatch =>  {
        dispatch(createSaveBallotRequestAction(ballot));

        return fetch('http://localhost:3060/elections', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ballot),
        });
    }
};

export const addBallotQuestionAction = ballotQuestions => ({
    type: ADD_BALLOT_QUESTION_ACTION, ballotQuestions
});

export const clearBallotQuestionsAction = (ballotQuestions) => ({
    type: CLEAR_BALLOT_QUESTIONS_ACTION,
    ballotQuestions,
});


