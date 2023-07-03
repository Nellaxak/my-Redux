//initialState необязательный входящий параметр
export function createStore(reducer, initialState) {
  // Когда хранилище создается, отправляется действие "INIT", так что каждый
  // редуктор возвращает их исходное состояние. Это эффективно заполняет
  // дерево начального состояния.
  let currentState = reducer(initialState, {
    type: 'INIT',
  }); //initialState;

  const listeners = [];
  const getState = () => currentState;

  const dispatch = (action) => {
    currentState = reducer(initialState, action);
    listeners.forEach((listener) => {
      listener();
    });
  };
  const subscribe = (listener) => {
    listeners.push(listener);
    //добавлено от утечек памяти
    //должен возвращать unsbuscribe
    const unsubscribe = () => {
      const findIndex = listeners.indexOf(listener);
      listeners.splice(findIndex, 1);
    };
    return unsubscribe;
  };

  return {
    getState,
    dispatch,
    subscribe,
  };
}
