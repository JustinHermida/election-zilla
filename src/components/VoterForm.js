import React from 'react';
import PropTypes from 'prop-types';

import { StringFormControl } from './FormControls';
import { useForm } from '../hooks/useForm';
import { Link } from 'react-router-dom';

export const VoterForm = ({ buttonText, onSubmitVoter }) => {

  const [ voterForm, change, resetVoterForm ] = useForm({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    birthdate: '',
    email: '',
    phone: '',
  });

  const submitVoter = () => {
    onSubmitVoter(voterForm);
    resetVoterForm();
  };

  return (
    <form>
      <StringFormControl caption="FirstName" name="firstName" value={voterForm.firstName} onChange={change} />
      <StringFormControl caption="LastName" name="lastName" value={voterForm.lastName} onChange={change} />
      <StringFormControl caption="Address" name="address" value={voterForm.address} onChange={change} />
      <StringFormControl caption="City" name="city" value={voterForm.city} onChange={change} />
      <StringFormControl caption="Birthdate" name="birthdate" value={voterForm.birthdate} onChange={change} />
      <StringFormControl caption="Email" name="email" value={voterForm.email} onChange={change} />
      <StringFormControl caption="Phone" name="phone" value={voterForm.phone} onChange={change} />
      <Link className="btn btn-primary mt-4" to="/" onClick={submitVoter}>{buttonText}</Link>
    </form>
  )

};

VoterForm.defaultProps = {
  buttonText: 'Submit Voter',
};

VoterForm.propTypes = {
  buttonText: PropTypes.string,
  onSubmitVoter: PropTypes.func.isRequired,
};