import React from 'react';
import PropTypes from 'prop-types';
import { getStep } from '../selectors';
import { updateTextData } from '../updateTextData';
import { useSelector } from '../myRedux/hooks/useSelector';
export const StepSizeValue = () => {
  const ref = React.useRef(null);
  const stepSize = useSelector(getStep);
  React.useEffect(() => {
    updateTextData(stepSize.value, ref);
  }, [stepSize.value]);
  return <span className='step_stepSize' ref={ref}></span>;
};
StepSizeValue.propTypes = {
  value: PropTypes.number,
};
StepSizeValue.defaultProps = {
  value: 1,
};
