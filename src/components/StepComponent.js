import React from 'react';
import { StepInput } from './StepInput';
import { StepSizeValue } from './StepSizeValue';

export const StepComponent = () => {
  return (
    <div className='step'>
      <StepInput />
      <label htmlFor='step' className='step__label'>
        <span className='step__text'>Текущая величина шага:</span>
      </label>
      <output className='step__output'>
        <StepSizeValue />
      </output>
    </div>
  );
};
