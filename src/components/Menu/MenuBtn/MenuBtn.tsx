import './style.scss';

import React from 'react';

import Icon from '~/components/common/Icon/Icon';
import IconList from '~/components/common/IconList/IconList';

import { MenuState } from '../types';
import { MenuBtnProps } from './types';

function MenuBtn({ menuState, onClick }: MenuBtnProps) {
  return (
    <button id="menu-btn" className="btn-icon" onClick={onClick} type="button">
      {menuState === MenuState.Expanded ? (
        <Icon name="menu-cross" />
      ) : (
        <IconList names={['menu-mobile', 'menu-tablet', 'menu-desktop']} />
      )}
    </button>
  );
}

export default MenuBtn;
