import React from 'react';
import { useDispatch } from 'react-redux';

import useSelectedColor from '../../../../../hooks/useSelectedColor';
import { setSelectedColor } from '../../../../../store/actions';
import { AdditionalStageProps } from './types';

function AdditionallyStage({
  updateAvailableStageIndex,
}: AdditionalStageProps) {
  const dispatch = useDispatch();
  function handleInputOnChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ): void {
    dispatch(setSelectedColor(event.target.value));
    updateAvailableStageIndex();
  }

  return (
    <>
      <p>Color</p>
      <input value={useSelectedColor()} onChange={handleInputOnChange} />
    </>
  );
}

export default AdditionallyStage;
