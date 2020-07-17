import React from "react";
import {DisplayQuestionResult} from "./DisplayQuestionResult";

export const DisplayBallotResults = ({election, displayIds, onViewResults}) => {

    return (
        <table className="light-background table table-responsive-xl">
            <thead>
                <tr>
                    <th>{election.name}</th>
                </tr>
            </thead>
            <tbody>
                {election.questions.map(question => {
                    const display = displayIds && displayIds.includes(question.id);

                    return <DisplayQuestionResult
                        key={question.id}
                        electionId={election.id}
                        question={question}
                        display={display}
                        onViewResults={onViewResults}/>
                })}
            </tbody>
        </table>
    );
};