import React from "react";
import {DisplayQuestionResult} from "./DisplayQuestionResult";

export const DisplayBallotResults = ({election}) => {

    return (
        <table className="light-background table table-responsive-xl">
            <thead>
                <tr>
                    <th>{election.name}</th>
                </tr>
            </thead>
            <tbody>
                {election.questions.map(question => <DisplayQuestionResult key={question.id} question={question} />)}
            </tbody>
        </table>
    );
};