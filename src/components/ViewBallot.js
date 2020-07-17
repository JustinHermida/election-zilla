import React from "react";

export const ViewBallot = ({ election, onViewBallotResults }) => {

    const viewResults = () => {
        onViewBallotResults(election.id);
    };

    return (
        <tr key={election.id}>
            <td>{election.name}</td>
            <td>
                <button type="button" className="btn btn-success" onClick={viewResults}>View Results</button>
            </td>
        </tr>
    )
};