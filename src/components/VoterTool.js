import React from 'react';

import { ToolHeader } from './ToolHeader';
import { VoterTable } from './VoterTable';
import { VoterForm } from './VoterForm';

import "./VoterTool.css";

export const VoterTool = ({
  voters, editVoterId, onAddVoter: addVoter, onSaveVoter: saveVoter,
  onDeleteVoter: deleteVoter, onEditVoter: editVoter,
  onCancelVoter: cancelVoter,
  onSortVoter: sortVoter,
}) => {

  return (
    <div>
      <ToolHeader headerText="View Voters" />
      <VoterTable voters={voters} editVoterId={editVoterId}
      onAddVoter={addVoter}
    onEditVoter={editVoter} onDeleteVoter={deleteVoter}
    onSaveVoter={saveVoter} onCancelVoter={cancelVoter}
    onSortVoter={sortVoter} />
    </div>
  );
};