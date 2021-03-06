import React from 'react';
import PropTypes from 'prop-types';

import { voterPropTypes } from '../propTypes/voters';
import { useForm } from '../hooks/useForm';
// import { NumberInput } from './NumberInput';


export const VoterEditRow = ({
  voter,
  onSaveVoter,
  onCancelVoter: cancelVoter,
}) => {

  const [ voterForm, change ] = useForm({
    firstName: voter.firstName,
    lastName: voter.lastName,
    address: voter.address,
    city: voter.city,
    birthdate: voter.birthdate,
    email: voter.email,
    phone: voter.phone,
  });

  const saveVoter = () => {
    onSaveVoter({
      ...voterForm,
      id: voter.id,
    });
  };
  
  return (
    <tr>
      <td>{voter.id}</td>
      <td><input type="text" name="firstName" value={voterForm.firstName} onChange={change} /></td>
      <td><input type="text" name="lastName" value={voterForm.lastName} onChange={change} /></td>
      <td><input type="text" name="address" value={voterForm.address} onChange={change} /></td>
      <td><input type="text" name="city" value={voterForm.city} onChange={change} /></td>
      <td><input type="text" name="birthdate" value={voterForm.birthdate} onChange={change} /></td>
      <td><input type="text" name="email" value={voterForm.email} onChange={change} /></td>
      <td><input type="text" name="phone" value={voterForm.phone} onChange={change} /></td>
      <td colSpan="2">
        <button type="button" className="btn btn-primary"
          onClick={saveVoter}>Save</button>
        <button type="button" className="btn btn-primary"
          onClick={cancelVoter}>Cancel</button>
      </td>
    </tr>
  );

};

VoterEditRow.propTypes = {
  voter: voterPropTypes,
  onSaveVoter: PropTypes.func.isRequired,
  onCancelVoter: PropTypes.func.isRequired,
};