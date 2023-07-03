import React from 'react';
import Provider from './myRedux/Provider';
import { createStore } from './myRedux/createStore';
import { CounterComponent } from './components/CounterComponent';
import reducer from './reducer';

//_________________
//функциональный компонент должен возвращать неизменяемое значение vdom
//{изменяемое значение} недолжно быть
//функция (1)=> создает новую функцию в рендере
//в шаблоне недолжно быть (е)=> , т.к. синтетические события доступны в обработчике события
//_______________

function App() {
  return (
    <Provider store={createStore(reducer)}>
      <CounterComponent />
    </Provider>
  );
}
export default App;
