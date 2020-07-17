import React from "react";
import { ViewBallot } from "./ViewBallot";


export const ViewElectionResults = ({ elections, onViewBallotResults}) => {
    return (
        <div>
            <header className="tool-header">
                <h1>View Results</h1>
            </header>
            <table className="table table-striped light-background">
                <tbody>
                {!elections.length
                    ? <tr><td colSpan="2">There are no elections.</td></tr>
                    : elections.map(election =>
                        <ViewBallot key={election.id} election={election} onViewBallotResults={onViewBallotResults}/>
                        )
                }
                </tbody>
            </table>
        </div>
    )
};

ViewElectionResults.defaultProps = {
    elections: [],
};