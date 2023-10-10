import { MouseEventHandler } from 'react';

export type OrderInfoProps = {
  btnLabel: string;
  btnOnClick: MouseEventHandler<HTMLButtonElement>;
  reachedStageIndex: number;
};
