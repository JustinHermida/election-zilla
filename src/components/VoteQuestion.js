import React from "react";

export const VoteQuestion = ({ballotId, question, onVote}) => {

    const voted = (e) => {
        onVote(ballotId, question.id, e.target.checked);
    };
    return (
        <tr key={question.id}>
            <td>{question.question}</td>
            <td><input type="checkbox" value={question.id} onChange={voted}/></td>
        </tr>
    )
};