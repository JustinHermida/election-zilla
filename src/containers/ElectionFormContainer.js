import React, {useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {addBallotQuestionAction, saveBallot} from "../actions/electionActions";
import {NewElectionsForm} from "../components/NewElectionsForm";

export const ElectionFormContainer = () => {

    const stateProps = useSelector(state => state);
    const dispatch = useDispatch();

    const dispatchProps = useMemo(() => bindActionCreators({
        onSaveBallot: saveBallot,
        onAddBallotQuestions: addBallotQuestionAction,
    }, dispatch), [ dispatch ]);

    return <NewElectionsForm questions={stateProps.ballotQuestions} {...dispatchProps} />;
};

