import { MouseEventHandler } from 'react';

import MenuStates from '../types';

type MenuBtnProps = {
  menuState: MenuStates;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export default MenuBtnProps;
