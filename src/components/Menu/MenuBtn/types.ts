import { MouseEventHandler } from 'react';

import MenuState from '../types';

export type MenuBtnProps = {
  menuState: MenuState;
  onClick: MouseEventHandler<HTMLButtonElement>;
};
