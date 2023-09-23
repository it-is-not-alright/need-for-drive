import { MouseEventHandler } from 'react';

import MenuStates from '../types';

export type MenuBtnProps = {
  menuState: MenuStates;
  onClick: MouseEventHandler<HTMLButtonElement>;
};
