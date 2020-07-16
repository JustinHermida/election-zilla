import React from "react";

export const ViewElectionResults = ({ elections }) => {
    return (
        <>
            <table>
                <tbody>
                {
                    elections.map( election =>
                        (
                            <tr key={election.id}>
                                <td colSpan="2">{election.name}</td>
                            </tr>
                        )

                    )
                }
                </tbody>

            </table>
            {/*{*/}
            {/*    elections.map( election =>*/}
            {/*        <ul key={election.id}>*/}
            {/*            {election.questions.map( question =>*/}
            {/*                <li key={question.id}>{question.question} {question.count}</li>*/}
            {/*            )}*/}
            {/*        </ul>*/}
            {/*    )*/}
            {/*}*/}
        </>
    )
};

ViewElectionResults.defaultProps = {
    elections: [],
};