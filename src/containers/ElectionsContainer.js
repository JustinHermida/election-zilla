import React, {useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {refreshElections, saveBallot} from "../actions/electionActions";
import {NewElection} from "../components/NewElection";
import { ViewElections } from "../components/ViewElections";

export const ElectionsContainer = ({ display }) => {

    const stateProps = useSelector(state => state);
    const dispatch = useDispatch();

    const dispatchProps = useMemo(() => bindActionCreators({
        onSaveBallot: saveBallot,
        onRefreshElections: refreshElections,
    }, dispatch), [ dispatch ]);

    useEffect(() => {
        dispatchProps.onRefreshElections();
    }, [ dispatchProps ]);

    const displayElection = () => {
        if(display === "new") {
            return <NewElection />;
        }

        return <ViewElections />;
    };

    return displayElection();

};