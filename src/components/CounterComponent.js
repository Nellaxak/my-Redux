import React from 'react';
import { StepComponent } from './StepComponent';
import { CounterButton } from './CounterButton';
import { CounterValue } from './CounterValue';

export const CounterComponent = () => {
  //flow контент(<button, span, input>)
  //div root flow контент, main
  //fieldset-для группировки нескольких элементов управления в форме

  return (
    <main role='main' className='main'>
      <form className='form' id='mainForm'>
        <fieldset className='fieldset'>
          <legend className='label-count label-count_hover'>
            <span className='label-count__text'>
              Значение счётчика должно увеличиваться или уменьшаться на заданную
              величину шага
            </span>
          </legend>
          <StepComponent />
          <div className='count'>
            <CounterButton numberSing={-1} />
            <div className='count__sticky-container'>
              <output className='count__sticky-container-output'>
                <CounterValue />
              </output>
              <CounterButton numberSing={1} />
            </div>
          </div>
        </fieldset>
      </form>
    </main>
  );
};
