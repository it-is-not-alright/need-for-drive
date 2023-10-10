import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setColor } from '~/store/color/colorSlice';
import colorSelector from '~/store/color/selectors';

import { AdditionalStageProps } from './types';

function AdditionallyStage({ updateReachedStageIndex }: AdditionalStageProps) {
  const dispatch = useDispatch();
  const color = useSelector(colorSelector);

  function handleInputOnChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ): void {
    dispatch(setColor(event.target.value));
    updateReachedStageIndex();
  }

  return (
    <>
      <p>Color</p>
      <input value={color} onChange={handleInputOnChange} />
    </>
  );
}

export default AdditionallyStage;
