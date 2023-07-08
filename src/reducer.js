import { UPDATE_COUNTER, CHANGE_STEP_SIZE } from './actions';
import defaultState from './defaultState';

const reducer = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_COUNTER:
      state.count.data = {
        value: state.count.data.value + state.step.data.value * payload,
      };
      return { ...state };
    case CHANGE_STEP_SIZE:
      state.step.data = { value: payload };
      return { ...state };
    default:
      return { ...state };
  }
};
export default reducer;
