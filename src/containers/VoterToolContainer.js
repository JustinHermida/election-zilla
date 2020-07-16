import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
  createAddVoterAction, createSaveVoterAction,
  createDeleteVoterAction, createEditVoterAction,
  createCancelVoterAction
} from '../actions/voterToolActions';

import { VoterTool } from '../components/VoterTool';

export const VoterToolContainer = () => {

  const voters = useSelector(state => state.voters);
  const editVoterId = useSelector(state => state.editVoterId);

  const dispatchProps = bindActionCreators({
    onAddVoter: createAddVoterAction,
    onSaveVoter: createSaveVoterAction,
    onDeleteVoter: createDeleteVoterAction,
    onEditVoter: createEditVoterAction,
    onCancelVoter: createCancelVoterAction,
  }, useDispatch());


  return <VoterTool {...dispatchProps} voters={voters} editVoterId={editVoterId} />;
};