import React, {useState} from "react";
import {NewQuestionsTable} from "./NewQuestionsTable";
import { ElectionsContainer } from "../containers/ElectionsContainer";

export const NewElection = ({ on}) => {

    const [ ballot, setNewElection ] = useState({
        name: '',
        question: '',
        questions: [],
    });

    const change = (e) => {
        setNewElection({
            ...ballot,
            [e.target.name]: e.target.value,
        });
    };

    const submitElection = () => {
        const newQuestionsList = ballot.questions.concat();
        newQuestionsList.push(ballot.question);

        setNewElection({
            name: ballot.name,
            question: '',
            questions: newQuestionsList,
        });
    };

    const saveElection = () => {
        const ballotQuestions = ballot.questions.map((question, index) => ({
            id: index + 1,
            question: question,
            count: 0,
            voterIds: [],
        }));

        const elections = {
            name: ballot.name,
            questions: ballotQuestions,
        };


        console.log(elections);
        // dispatchProps.onSaveBallot(elections);
    };

    return (
        <>
            <form>
                <label htmlFor="new-ballot-input">Ballot Name</label>
                <input type="text" id="new-ballot-input" name="name" value={ballot.name} onChange={change} />
                <label htmlFor="new-question-input">New Question</label>
                <input type="text" id="new-question-input" name="question" value={ballot.question} onChange={change} />
                <button type="button" onClick={submitElection}>Add Question</button>
            </form>
            <NewQuestionsTable questions={ballot.questions} />
            <button type="button" onClick={saveElection}>Save Ballot</button>
        </>
    );
};