import './style.scss';

import React from 'react';

import Icon from '../../Icon/Icon';
import IconList from '../../IconList/IconList';
import MenuStates from '../types';
import { MenuBtnProps } from './types';

function MenuBtn({ menuState, onClick }: MenuBtnProps) {
  return (
    <button id="menu-btn" className="btn-icon" onClick={onClick} type="button">
      {menuState === MenuStates.Expanded ? (
        <Icon name="menu-cross" />
      ) : (
        <IconList names={['menu-mobile', 'menu-tablet', 'menu-desktop']} />
      )}
    </button>
  );
}

export default MenuBtn;
