import React from "react";

export const DisplayQuestionResult = ({electionId, question, display, onViewResults}) => {

    const viewResult = () => {
        onViewResults(electionId, question.id);
    };

    return (
        <tr key={question.id}>
            <td>{question.question}</td>

            {display ? <td>{question.count}</td>
                : <td><button type="button" className="btn btn-secondary" onClick={viewResult}>View Results</button></td>}

        </tr>
    );
};