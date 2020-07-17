import React from "react";
import {DisplayQuestionResult} from "./DisplayQuestionResult";

export const DisplayBallotResults = ({election, onBack}) => {
    const back = () => {
        onBack();
    };

    return (
        <>
            <header className="tool-header">
                <h1>Ballot Results!</h1>
            </header>
            <table className="light-background table table-responsive-xl">
                <thead>
                    <tr>
                        <th colSpan="2">{election.name}</th>
                    </tr>
                </thead>
                <tbody>
                    {election.questions.map(question => {
                        return <DisplayQuestionResult key={question.id} question={question}/>
                    })}
                </tbody>
            </table>
            <button type="button" className="btn btn-secondary" onClick={back}>Back</button>
        </>
    );
};