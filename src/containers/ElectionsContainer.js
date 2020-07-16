import React, {useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {
    addBallotQuestionAction,
    clearBallotQuestionsAction,
    refreshElections,
    saveBallot
} from "../actions/electionActions";
import {ViewElections} from "../components/ViewElections";
import {NewElectionsForm} from "../components/NewElectionsForm";

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

    const displayElection = () => {
        if(display === "new") {
            return <NewElectionsForm questions={stateProps.ballotQuestions} {...dispatchProps} />;
        }

        return <ViewElections />;
    };

    return displayElection();

};