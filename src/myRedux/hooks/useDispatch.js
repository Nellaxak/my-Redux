import { ReactReduxContext } from '../Context';
import { useReduxContext } from './useReduxContext';

export const useDispatch = (context = ReactReduxContext) => {
  const store = useReduxContext(context);
  return store.dispatch;
};
