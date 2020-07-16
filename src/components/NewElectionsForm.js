import React, {useState} from "react";
import {NewQuestionsTable} from "./NewQuestionsTable";

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
        const ballotQuestions = questions.map((question, index) => ({
            id: index + 1,
            question: question,
            count: 0,
            voterIds: [],
        }));

        // This is what is getting saved to the db.
        const elections = {
            name: '',
            questions: ballotQuestions,
        };

        // TODO: figure out how to call clearBallotQuestionsAction in the onSaveBallot()
        onSaveBallot(elections)
            .then(() => onAddBallotQuestions([]));

        setNewElection({
            name: '',
            question: '',
        });
    };

    return (
        <>
            <form>
                <label htmlFor="new-ballot-input">Ballot Name</label>
                <input type="text" id="new-ballot-input" name="name" value={ballot.name} onChange={change} />
                <label htmlFor="new-question-input">New Question</label>
                <input type="text" id="new-question-input" name="question" value={ballot.question} onChange={change} />
                <button type="button" onClick={addBallotQuestion}>Add Question</button>
            </form>
            <NewQuestionsTable questions={questions} />
            <button type="button" onClick={saveElection}>Save Ballot</button>
        </>
    );
};

NewElectionsForm.defaultProps = {
    questions: []
};