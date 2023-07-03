import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from '../myRedux/hooks/useDispatch';
import { updateCounter } from '../actionCreators';
import { SpanButton } from './SpanButton';
//import { render, screen } from '@testing-library/react'
//console.log(screen)
class CommandObject {
  constructor(znakButtonValue) {
    this.eventClickButton = this.eventClickButton.bind(this);
    this.znakButtonValue = znakButtonValue;
  }
  eventClickButton() {
    //чтобы после click в отдельной задаче запустился dispatch
    setTimeout(() => {
      const res = updateCounter(this.znakButtonValue);
      dispatch(res);
    }, 0);
  }
}
let commandButton;
let TextButtonString;
let dispatch;
export const CounterButton = (props) => {
  //для Button span (стилизация текста) сделать отдельным компонентом
  const ref = React.useRef();
  dispatch = useDispatch();
  commandButton = new CommandObject(props.numberSing);
  if (props.numberSing > 0) {
    TextButtonString = '+';
  } else {
    TextButtonString = '-';
  }
  //т.к. стрелочная функция с разными параметрами (-1), (1) внутри шаблона приведет
  //к лишнему рендеру, событие сделано через шаблон Command
  return (
    <button
      type='button'
      onClick={commandButton.eventClickButton}
      className='count__button count__button_hover'
      ref={ref}
    >
      <SpanButton value={TextButtonString} />
    </button>
  );
};
CounterButton.propTypes = {
  numberSing: PropTypes.number,
};
CounterButton.defaultProps = {
  numberSing: 1,
};
