import React from 'react';
import PropTypes from 'prop-types';

export const SpanButton = (props) => {
  return <span className='count__buttontext'>{props.value}</span>;
};
SpanButton.propTypes = {
  value: PropTypes.string,
};
SpanButton.defaultProps = {
  value: ' ',
};
