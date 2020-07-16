import React, {useEffect, useMemo} from "react";
import {ViewElectionResults} from "../components/ViewElectionResults";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {refreshElections} from "../actions/electionActions";

export const ViewResultsContainer = () => {
    const stateProps = useSelector(state => state);
    const dispatch = useDispatch();

    const dispatchProps = useMemo(() => bindActionCreators({
        onRefreshElections: refreshElections,
    }, dispatch), [ dispatch ]);

    useEffect(() => {
        dispatchProps.onRefreshElections();
    }, [ dispatchProps ]);

    return <ViewElectionResults elections={stateProps.elections}/>
};