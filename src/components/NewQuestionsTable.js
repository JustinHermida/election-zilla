import React from "react";

import PropTypes from 'prop-types';

export const NewQuestionsTable = ({ questions }) => {


    return (
        <table>
            <thead>
            <tr>
                <th>Questions Added</th>
            </tr>
            </thead>
            <tbody>
            {
                !questions.length ? <tr><td>There are no questions added.</td></tr> :
                    questions.map((question, index)=> <tr key={index}><td>{question}</td></tr>)
            }
            </tbody>
        </table>
    )
};

NewQuestionsTable.defaultProps = {
    questions: []
};

NewQuestionsTable.propTypes = {
    questions: PropTypes.arrayOf(PropTypes.string)
};