import React from 'react';
import PropTypes from 'prop-types';

const ShowQuoteComponent = ({ message }) => ((<h1>{message}</h1>));

ShowQuoteComponent.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ShowQuoteComponent;
