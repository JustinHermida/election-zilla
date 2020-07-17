import React from "react";
import {DisplayQuestionResult} from "./DisplayQuestionResult";

export const DisplayBallotResults = ({election, onBack}) => {
    const back = () => {
        onBack();
    };

    return (
        <>
            <table className="light-background table table-responsive-xl">
                <thead>
                    <tr>
                        <th>{election.name}</th>
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