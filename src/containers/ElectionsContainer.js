import React, {useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {
    addBallotQuestionAction,
    refreshElections,
    saveBallot
} from "../actions/electionActions";
import {ViewElections} from "../components/ViewElections";
import {NewElectionsForm} from "../components/NewElectionsForm";
import {EditBallot} from '../components/EditBallot'

export const ElectionsContainer = ({ display }) => {

    const stateProps = useSelector(state => state);
    const dispatch = useDispatch();

    const dispatchProps = useMemo(() => bindActionCreators({
        onSaveBallot: saveBallot,
        onRefreshElections: refreshElections,
        onAddBallotQuestions: addBallotQuestionAction,
    }, dispatch), [ dispatch ]);

    useEffect(() => {
        dispatchProps.onRefreshElections();
    }, [ dispatchProps ]);

    return (
        display === "new"
        ? <NewElectionsForm /> 
        : display === "ballot" 
            ? <EditBallot {...dispatchProps} {...stateProps} />
            : <ViewElections {...dispatchProps} {...stateProps} />
    );

};