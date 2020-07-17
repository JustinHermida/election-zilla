import React, {useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {
    refreshElections,
} from "../actions/electionActions";
import {ViewElections} from "../components/ViewElections";

export const ElectionsContainer = () => {
    const stateProps = useSelector(state => state);
    const dispatch = useDispatch();

    const dispatchProps = useMemo(() => bindActionCreators({
        onRefreshElections: refreshElections,
    }, dispatch), [ dispatch ]);

    useEffect(() => {
        dispatchProps.onRefreshElections();
    }, [ dispatchProps ]);

    return <ViewElections {...dispatchProps} {...stateProps}/>;

};