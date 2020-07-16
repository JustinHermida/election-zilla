import React, {useState} from "react";
import {NewQuestionsTable} from "./NewQuestionsTable";
import {addBallotQuestionAction} from "../actions/electionActions";

export const NewElectionsForm = ({questions, onAddBallotQuestions, onSaveBallot}) => {

    const [ ballot, setNewElection ] = useState({
        name: '',
        question: '',
    });

    const change = (e) => {
        setNewElection({
            ...ballot,
            [e.target.name]: e.target.value,
        });
    };

    const addBallotQuestion = () => {
        const newQuestionsList = questions.concat();
        newQuestionsList.push(ballot.question);

        onAddBallotQuestions(newQuestionsList);

        setNewElection({
            name: ballot.name,
            question: '',
        });
    };

    const saveElection = () => {
        // TODO: figure out how to call clearBallotQuestionsAction in the onSaveBallot()
        onSaveBallot(ballot.name, questions)
            .then(() => onAddBallotQuestions([]));

        setNewElection({
            name: '',
            question: '',
        });
    };

    return (
        <>
            <form>
                <div className="form-group row">
                    <label htmlFor="new-ballot-input">Ballot Name</label>
                    <input className="form-control" type="text" id="new-ballot-input" name="name" value={ballot.name} onChange={change} />
                </div>
                <div className="form-group row">
                    <label htmlFor="new-question-input">New Question</label>
                    <input className="form-control" type="text" id="new-question-input" name="question" value={ballot.question} onChange={change} />
                </div>
                <button type="button" className="btn btn-primary" onClick={addBallotQuestion}>Add Question</button>
            </form>
            <NewQuestionsTable questions={questions} />
            <button type="button" onClick={saveElection}>Save Ballot</button>
        </>
    );
};

NewElectionsForm.defaultProps = {
    questions: []
};