import React from 'react';

import { votersPropTypes } from '../propTypes/voters';
import { VoterViewRow } from './VoterViewRow';
import { VoterEditRow } from './VoterEditRow';
import { useList } from '../hooks/useList';
// import ReactTable from 'react-table'

export const VoterTable = ({
  voters, editVoterId,
  onAddVoter: addVoter,
  onEditVoter: editVoter,
  onDeleteVoter: deleteVoter,
  onSaveVoter: saveVoter,
  onCancelVoter: cancelVoter,
  onSortVoter: sortVoter,
}) => {

  const [ selectedList , addVoterToSelectedList, deleteVoterFromSelectedListList, clearSelectedList ] = useList([]);

  const deleteMultiple = (selectedList) => {
    selectedList.map(selectedVoter => {
      deleteVoter(selectedVoter.id);
    });
    clearSelectedList();
  }

  const headerClickHandler = (columnName) => {
    // console.log('Header clicked!');
    // console.log(columnName);

    sortVoter(columnName);

    // const newVoters = voters.concat().sort((a, b) => a.id < b.id ? 1 : -1);
    // voters.map(v => deleteVoter(v.id));
    // newVoters.map(newVoter => addVoter(newVoter));

  };

  return (
    <>
      <table className="light-background table table-striped table-responsive-xl">
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