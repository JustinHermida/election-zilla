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
  onSortVoter: sortVoter,
}) => {

  const [ selectedList , addVoterToSelectedList, deleteVoterFromSelectedListList, clearSelectedList ] = useList([]);

  const deleteMultiple = (selectedList) => {
    selectedList.forEach(selectedVoter => {
      deleteVoter(selectedVoter.id);
    });
    clearSelectedList();
  }

  const headerClickHandler = (columnName) => {
    sortVoter(columnName);
  };

  return (
    <>
      <table className="light-background table table-striped table-responsive">
        <thead>
          <tr>
            <th onClick={() => headerClickHandler("id")}>Id</th>
            <th onClick={() => headerClickHandler("firstName")}>FirstName</th>
            <th onClick={() => headerClickHandler("lastName")}>LastName</th>
            <th onClick={() => headerClickHandler("address")}>Address</th>
            <th onClick={() => headerClickHandler("city")}>City</th>
            <th onClick={() => headerClickHandler("birthdate")}>Birthdate</th>
            <th onClick={() => headerClickHandler("email")}>Email</th>
            <th onClick={() => headerClickHandler("phone")}>Phone</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {!voters.length
            ? <tr><td colSpan="9">There are no registered voters.</td></tr>
            : voters.map(voter => voter.id === editVoterId
                ? <VoterEditRow key={voter.id} voter={voter}
                    onSaveVoter={saveVoter} onCancelVoter={cancelVoter} />
                : <VoterViewRow key={voter.id} voter={voter}
                    onEditVoter={editVoter} onDeleteVoter={deleteVoter} onAddVoterToSelectedList={addVoterToSelectedList}
                    ondeleteVoterFromSelectedListList={deleteVoterFromSelectedListList}/>)}
        </tbody>
      </table>
      <button className="btn btn-primary" type="button" onClick={() => deleteMultiple(selectedList)}>Delete Selected Voters</button>
    </>
  );

};

VoterTable.defaultProps = {
    voters: [],
};

VoterTable.propTypes = {
    voters: votersPropTypes,
};