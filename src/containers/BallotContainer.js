import React, {useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {
    refreshElections, emailValid, onVoteRequest, castVote
} from "../actions/ballotActions";

import {EditBallot} from '../components/EditBallot'

export const BallotContainer = () => {
    const stateProps = useSelector(state => state);
    const dispatch = useDispatch();

    const dispatchProps = useMemo(() => bindActionCreators({
        onRefreshElections: refreshElections,
        onEmailValid: emailValid,
        onVote: onVoteRequest,
        onCastVote: castVote,
    }, dispatch), [ dispatch ]);

    useEffect(() => {
        dispatchProps.onRefreshElections();
    }, [ dispatchProps ]);

    return <EditBallot {...dispatchProps} {...stateProps} />;

};