import { MouseEventHandler } from 'react';

import { MenuState } from '../types';

type MenuButtonProps = {
  menuState: MenuState;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export { MenuButtonProps };
