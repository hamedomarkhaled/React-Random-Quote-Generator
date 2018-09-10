import React from 'react';
import PropTypes from 'prop-types';

const ShowAuthorComponent = ({ Author }) => (<h2>{Author}</h2>);


ShowAuthorComponent.propTypes = {
  Author: PropTypes.string.isRequired,
};

export default ShowAuthorComponent;
