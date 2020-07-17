import React from 'react';

import { ToolHeader } from './ToolHeader';
import { VoterTable } from './VoterTable';
import { VoterForm } from './VoterForm';

import "./VoterTool.css";

export const VoterTool = ({
  voters, editVoterId, onSaveVoter: saveVoter,
  onDeleteVoter: deleteVoter, onEditVoter: editVoter,
  onCancelVoter: cancelVoter,
}) => {

  return (
    <div>
      <ToolHeader headerText="View Voters" />
      <VoterTable voters={voters} editVoterId={editVoterId}
    onEditVoter={editVoter} onDeleteVoter={deleteVoter}
    onSaveVoter={saveVoter} onCancelVoter={cancelVoter} />
    </div>
  );
};