import { MouseEventHandler } from 'react';

import { MenuState } from '../types';

type MenuBtnProps = {
  menuState: MenuState;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export { MenuBtnProps };
