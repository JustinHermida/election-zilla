import React from "react";

export const DisplayQuestionResult = ({question}) => {

    return (
        <tr key={question.id}>
            <td>{question.question}</td>
            <td>{question.count}</td>
        </tr>
    );
};