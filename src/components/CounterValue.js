import React from 'react';
import PropTypes from 'prop-types';
import { getCount } from '../selectors';
import { updateTextData } from '../updateTextData';
import { useSelector } from '../myRedux/hooks/useSelector';

export const CounterValue = () => {
  const ref = React.useRef();
  const count = useSelector(getCount);
  React.useEffect(() => {
    updateTextData(count.value, ref);
  }, [count]);
  return <span className='count__text' ref={ref}></span>;
};
CounterValue.propTypes = {
  count: PropTypes.number,
};
CounterValue.defaultProps = {
  count: 0,
};
