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
import {ViewElectionResults} from "../components/ViewElectionResults";

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
        
        if( display === "results") {
            return <ViewElectionResults elections={stateProps.elections}/>
        }

        if (display === "ballot"){
            return <EditBallot {...dispatchProps} {...stateProps} />
        }

        return <ViewElections {...dispatchProps} {...stateProps}/>;
    };

    return displayElection();

};