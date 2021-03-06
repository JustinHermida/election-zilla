export const REFRESH_ELECTIONS_REQUEST_ACTION = 'REFRESH_ELECTIONS_REQUEST';
export const REFRESH_ELECTIONS_DONE_ACTION = 'REFRESH_ELECTIONS_DONE';

export const SAVE_BALLOT_REQUEST_ACTION = 'SAVE_BALLOT_REQUEST';
export const ADD_BALLOT_QUESTION_ACTION = 'ADD_BALLOT_QUESTION';
export const CLEAR_BALLOT_QUESTIONS_ACTION = 'CLEAR_BALLOT_QUESTIONS';

export const VIEW_BALLOT_RESULTS_ACTION = 'ADD_VIEW_BALLOT_RESULTS';
export const ON_REFRESH_BALLOT_RESULTS_ID_ACTION = 'ON_REFRESH_BALLOT_RESULTS_ID';


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

export const saveBallot = (name, questions) => {

    // build the db model
    const ballotQuestions = questions.map((question, index) => ({
        id: index + 1,
        question: question,
        count: 0,
        voterIds: [],
    }));

    const elections = {
        name: name,
        questions: ballotQuestions,
    };


    return dispatch =>  {
        dispatch(createSaveBallotRequestAction(elections));

        return fetch('http://localhost:3060/elections', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(elections),
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

export const viewBallotResultsAction = (ballotId) => ({
    type: VIEW_BALLOT_RESULTS_ACTION,
    ballotId,
});

export const refreshBallotResultsIdAction = () => ({
    type: ON_REFRESH_BALLOT_RESULTS_ID_ACTION,
    ballotId: -1,
});




