import React from 'react';

import { ToolHeader } from './ToolHeader';
import { VoterForm } from './VoterForm';

import "./VoterTool.css";

export const VoterFormTool = ({
  onAddVoter: addVoter,
}) => {

  return (
    <div>
      <ToolHeader headerText="Register Voter" />
    <VoterForm buttonText="Complete Registration" onSubmitVoter={addVoter} />
    </div>
  );
};