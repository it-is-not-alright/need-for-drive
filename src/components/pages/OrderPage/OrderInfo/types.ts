import { MouseEventHandler } from 'react';

type OrderInfoProps = {
  btnLabel: string;
  btnOnClick: MouseEventHandler<HTMLButtonElement>;
  reachedStageIndex: number;
  currentStageIndex: number;
};

export { OrderInfoProps };
