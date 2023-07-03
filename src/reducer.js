import { UPDATE_COUNTER, CHANGE_STEP_SIZE } from './actions';
import defaultState from './defaultState';

const reducer = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_COUNTER:
      state.count.append(
        state.count.tail.value + state.step.tail.value * payload
      );
      return { ...state };
    case CHANGE_STEP_SIZE:
      state.step.append(payload);
      return { ...state };
    default:
      return { ...state };
  }
};
export default reducer;
