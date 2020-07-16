import React, { useMemo, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
  addVoter, saveVoter,
  deleteVoter, createEditVoterAction,
  createCancelVoterAction, refreshVoters,
} from '../actions/voterToolActions';

import { VoterTool } from '../components/VoterTool';

export const VoterToolContainer = () => {

  // const voters = useSelector(state => state.voters);

  const stateProps = useSelector(state => state);

  const dispatch = useDispatch();

  // const editVoterId = useSelector(state => state.editVoterId);

  const dispatchProps = useMemo(() => bindActionCreators({
    onRefreshVoters: refreshVoters,
    onAddVoter: addVoter,
    onSaveVoter: saveVoter,
    onDeleteVoter: deleteVoter,
    onEditVoter: createEditVoterAction,
    onCancelVoter: createCancelVoterAction,
  }, dispatch), [ dispatch ]);

  useEffect(() => {

    dispatchProps.onRefreshVoters();

  }, [ dispatchProps ]);

  return <VoterTool {...dispatchProps} {...stateProps} />;
};