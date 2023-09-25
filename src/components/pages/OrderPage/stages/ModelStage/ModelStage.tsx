import React from 'react';
import { useDispatch } from 'react-redux';

import useSelectedModel from '../../../../../hooks/useSelectedModel';
import {
  setSelectedColor,
  setSelectedModel,
} from '../../../../../store/actions';
import { ModelStageProps } from './types';

function ModelStage({ updateAvailableStageIndex }: ModelStageProps) {
  const dispatch = useDispatch();
  function handleInputOnChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ): void {
    dispatch(setSelectedModel(event.target.value));
    dispatch(setSelectedColor(''));
    updateAvailableStageIndex();
  }

  return (
    <>
      <p>Model</p>
      <input value={useSelectedModel()} onChange={handleInputOnChange} />
    </>
  );
}

export default ModelStage;
