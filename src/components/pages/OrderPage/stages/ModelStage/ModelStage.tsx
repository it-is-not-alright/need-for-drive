import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setColor, setModel } from '~/store/orderDetails/orderDetailsSlice';
import orderDetailsSelector from '~/store/orderDetails/selectors';

import { ModelStageProps } from './types';

function ModelStage({ updateAvailableStageIndex }: ModelStageProps) {
  const dispatch = useDispatch();
  const { model } = useSelector(orderDetailsSelector);

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
