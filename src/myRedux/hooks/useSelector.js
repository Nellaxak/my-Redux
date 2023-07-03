import React from 'react';
import { ReactReduxContext } from '../Context';
import { useReduxContext } from './useReduxContext';

export const useSelector = (selector) => {
  const store = useReduxContext(ReactReduxContext);

  const [cached, setCached] = React.useState(selector(store.getState()));

  const render = () => {
    const unsubscribe = store.subscribe(subscriber);
    return unsubscribe;
  };
  const subscribe = () => {
    const newSelectedState = selector(store.getState());
    //ссылки === значит, это одна и та же ячейка памяти, т.е. один и тот же объект
    //код будет работать и без equalityFn (по умолчанию),
    //т.к. selector возвращает ссылочный тип данных
    setCached(newSelectedState);
  };
  const subscriber = React.useCallback(subscribe, [selector, store]);

  //flux подписка
  //useLayoutEffect более производителен, setCached будет происходить до фазы рендеринга
  React.useLayoutEffect(render, [selector, store, subscriber]);
  return cached;
};
