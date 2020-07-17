import React, { useMemo, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
  saveVoter,
  deleteVoter, createEditVoterAction,
  createCancelVoterAction, refreshVoters,
  sortHeaderRequestAction,
} from '../actions/voterToolActions';

import { VoterTool } from '../components/VoterTool';

export const VoterToolContainer = () => {

  const stateProps = useSelector(state => state);

  const dispatch = useDispatch();

  const dispatchProps = useMemo(() => bindActionCreators({
    onRefreshVoters: refreshVoters,
    onSaveVoter: saveVoter,
    onDeleteVoter: deleteVoter,
    onEditVoter: createEditVoterAction,
    onCancelVoter: createCancelVoterAction,
    onSortVoter: sortHeaderRequestAction,
  }, dispatch), [ dispatch ]);

  useEffect(() => {

    dispatchProps.onRefreshVoters();

  }, [ dispatchProps ]);

  const sortColumn = stateProps.sortColumn;

  const newVoters = stateProps.voters.concat().sort((a, b) => a[sortColumn] > b[sortColumn] ? 1 : -1);

  return <VoterTool {...dispatchProps} {...stateProps} voters={newVoters} />;
};