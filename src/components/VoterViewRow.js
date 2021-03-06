import React from 'react';

import { voterPropTypes } from '../propTypes/voters';

export const VoterViewRow = ({
  voter,
  onEditVoter,
  onDeleteVoter,
  onAddVoterToSelectedList: addVoterToSelectedList,
  ondeleteVoterFromSelectedListList: deleteVoterFromSelectedListList,

}) => {

  const handleChange = (e) => {
    if(e.target.checked) {
      addVoterToSelectedList(voter);
    } else {
      deleteVoterFromSelectedListList(voter.id);
    }
  };

  return (
    <>
      <tr>
        <td>{voter.id}</td>
        <td className="text">{voter.firstName}</td>
        <td className="text">{voter.lastName}</td>
        <td className="text">{voter.address}</td>
        <td className="text">{voter.city}</td>
        <td className="text">{voter.birthdate}</td>
        <td className="text">{voter.email}</td>
        <td className="text">{voter.phone}</td>
        <td>
          <input type="checkbox" name="select" onChange={handleChange} />
        </td>
        <td>
          <button type="button" className="btn btn-primary"
            onClick={() => onEditVoter(voter.id)}>Edit</button>
          <button type="button" className="btn btn-primary"
            onClick={() => onDeleteVoter(voter.id)}>Delete</button>
        </td>
      </tr>
    </>
  );

};

VoterViewRow.propTypes = {
  voter: voterPropTypes,
};
