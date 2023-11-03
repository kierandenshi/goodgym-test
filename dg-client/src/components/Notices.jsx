import React from 'react';
import PropTypes from 'prop-types';

export default function Notices({ notice }) {
  return (
    <div>{notice}</div>
  );
}

Notices.propTypes = {
  notice: PropTypes.string.isRequired
}
