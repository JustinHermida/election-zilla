import React from "react";
import {DisplayBallotResults} from "./DisplayBallotResults";

export const ViewElectionResults = ({ elections }) => {
    return (
        elections.map( election =>
            <DisplayBallotResults key={election.id} election={election} />
        )
    )
};

ViewElectionResults.defaultProps = {
    elections: [],
};