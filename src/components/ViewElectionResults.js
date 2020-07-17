import React from "react";
import {DisplayBallotResults} from "./DisplayBallotResults";

export const ViewElectionResults = ({ elections, displayIds, onViewResults }) => {

    return (
        elections.map( election => {
                const resultIdsToDisplay = displayIds[election.id];
                return <DisplayBallotResults key={election.id} election={election} displayIds={resultIdsToDisplay} onViewResults={onViewResults}/>
            }
        )
    )
};

ViewElectionResults.defaultProps = {
    elections: [],
};