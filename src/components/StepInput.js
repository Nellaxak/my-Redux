import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from '../myRedux/hooks/useDispatch';
import { changeStepSize } from '../actionCreators';

let dispatch;
const handleRange = (event) => {
  const ev = { ...event };
  //событие бегунка закончилась, dispatch в отдельной задаче
  setTimeout(() => {
    dispatch(changeStepSize(ev.target.valueAsNumber));
  }, 0);
};
export const StepInput = () => {
  //некотролируемый компонент не должен рендерится
  const ref = React.useRef();
  dispatch = useDispatch();
  React.useEffect(() => {
    //для правильного стартового отображения
    ref.current.stepDown(5);
  }, []);
  //onСhange событие не сработает на input type range
  //в рендере не должно быть шаблона value={stepSize}
  return (
    <input
      type='range'
      id='step'
      min='1'
      max='5'
      //step="any"
      //value='1' для события onСhange
      tabIndex='0'
      form='mainForm'
      className='step__input-range step__input-range_hover'
      ref={ref}
      onInput={handleRange}
    />
  );
};
StepInput.propTypes = {
  value: PropTypes.number,
  handleRange: PropTypes.func,
};
StepInput.defaultProps = {
  value: 1,
  handleRange() {},
};
