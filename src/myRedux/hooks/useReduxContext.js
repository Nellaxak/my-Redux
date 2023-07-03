import { useContext } from 'react';
import { ReactReduxContext } from '../Context';

export function useReduxContext() {
  const store = useContext(ReactReduxContext);
  return store;
}
