import './style.scss';

import React from 'react';

import Icon from '~/components/common/Icon/Icon';
import IconSet from '~/components/common/IconSet/IconSet';

import { MenuState } from '../types';
import { MenuButtonProps } from './types';

function MenuButton({ menuState, onClick }: MenuButtonProps) {
  return (
    <button id="menu-btn" className="btn-icon" onClick={onClick} type="button">
      {menuState === MenuState.Expanded ? (
        <Icon name="menu-cross" />
      ) : (
        <IconSet names={['menu-mobile', 'menu-tablet', 'menu-desktop']} />
      )}
    </button>
  );
}

export default MenuButton;
