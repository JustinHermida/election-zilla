import PropTypes from 'prop-types';

export const voterPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
//   birthdate: PropTypes.date.isRequired,

  email: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired,
});

export const votersPropTypes = PropTypes.arrayOf(voterPropTypes);
