import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setColor } from '~/store/color/colorSlice';
import { setModel } from '~/store/model/modelSlice';
import modelSelector from '~/store/model/selectors';

import { ModelStageProps } from './types';

function ModelStage({ updateAvailableStageIndex }: ModelStageProps) {
  const dispatch = useDispatch();
  const model = useSelector(modelSelector);

  function handleInputOnChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ): void {
    dispatch(setModel(event.target.value));
    dispatch(setColor(''));
    updateAvailableStageIndex();
  }

  return (
    <>
      <p>Model</p>
      <input value={model} onChange={handleInputOnChange} />
    </>
  );
}

export default ModelStage;
