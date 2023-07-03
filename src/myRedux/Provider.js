import React from 'react';
import { ReactReduxContext } from './Context';
const Context = ReactReduxContext;
const Provider = ({ store, children }) => {
  //лишние скобки {{ store }}
  return <Context.Provider value={store}>{children}</Context.Provider>;
};
export default Provider;
