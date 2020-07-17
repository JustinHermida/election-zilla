import React, {useEffect, useMemo} from "react";
import {ViewElectionResults} from "../components/ViewElectionResults";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {refreshBallotResultsIdAction, refreshElections, viewBallotResultsAction} from "../actions/electionActions";
import {DisplayBallotResults} from "../components/DisplayBallotResults";

export const ViewResultsContainer = () => {
    const stateProps = useSelector(state => state);
    const dispatch = useDispatch();
    
    const dispatchProps = useMemo(() => bindActionCreators({
        onViewBallotResults: viewBallotResultsAction,
        onRefreshElections: refreshElections,
        onBack: refreshBallotResultsIdAction,
    }, dispatch), [ dispatch ]);

    useEffect(() => {
        dispatchProps.onRefreshElections();
    }, [ dispatchProps ]);

    return (
        stateProps.ballotResultsId < 0 ?
            <ViewElectionResults elections={stateProps.elections} {...dispatchProps} />
            : <DisplayBallotResults
                election={stateProps.elections.filter(election => election.id === stateProps.ballotResultsId)[0]}
                onBack={dispatchProps.onBack}/>
    )
};