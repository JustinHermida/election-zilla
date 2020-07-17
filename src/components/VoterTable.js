import React from 'react';

import { votersPropTypes } from '../propTypes/voters';
import { VoterViewRow } from './VoterViewRow';
import { VoterEditRow } from './VoterEditRow';
import { useList } from '../hooks/useList';

export const VoterTable = ({
  voters, editVoterId,
  onEditVoter: editVoter,
  onDeleteVoter: deleteVoter,
  onSaveVoter: saveVoter,
  onCancelVoter: cancelVoter,
}) => {

  const [ selectedList , addVoterToSelectedList, deleteVoterFromSelectedListList, clearSelectedList ] = useList([]);

  const deleteMultiple = (selectedList) => {
    selectedList.map(selectedVoter => {
      deleteVoter(selectedVoter.id);
    });
    clearSelectedList();
  }

  return (
    <>
      <table className="light-background table table-striped table-responsive-xl">
        <thead>
          <tr>
            <th>Id</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Address</th>
            <th>City</th>
            <th>Birthdate</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {!voters.length
            ? <tr><td colSpan="7">There are no registered voters.</td></tr>
            : voters.map(voter => voter.id === editVoterId
                ? <VoterEditRow key={voter.id} voter={voter}
                    onSaveVoter={saveVoter} onCancelVoter={cancelVoter} />
                : <VoterViewRow key={voter.id} voter={voter}
                    onEditVoter={editVoter} onDeleteVoter={deleteVoter} onAddVoterToSelectedList={addVoterToSelectedList}
                    ondeleteVoterFromSelectedListList={deleteVoterFromSelectedListList}/>)}
        </tbody>
      </table>
      <button type="button" onClick={() => deleteMultiple(selectedList)}>Delete Selected Voters</button>
    </>
  );

};

VoterTable.defaultProps = {
    voters: [],
};

VoterTable.propTypes = {
    voters: votersPropTypes,
};