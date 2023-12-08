import './style.scss';

import classNames from 'classnames';
import React, { useState } from 'react';
import { useLocation } from 'react-router';

import { AppRoute } from '~/components/App/types';

import LangBtn from './LangBtn/LangBtn';
import MenuBtn from './MenuBtn/MenuBtn';
import NavBlock from './NavBlock/NavBlock';
import { MenuState } from './types';

function Menu() {
  const [state, setState] = useState<MenuState>(MenuState.Collapsed);
  const location = useLocation();

  const handleMenuBtnClick = () => {
    if (state === MenuState.Collapsed) {
      setState(MenuState.Expanded);
      document.documentElement.classList.add('no-scroll');
    } else {
      setState(MenuState.Collapsed);
      document.documentElement.classList.remove('no-scroll');
    }
  };

  return (
    <div id="menu" className={state}>
      <div id="menu__sidebar">
        <MenuBtn menuState={state} onClick={handleMenuBtnClick} />
        <LangBtn />
      </div>
      <div id="menu__container">
        <div
          id="menu__container__content"
          className={classNames({
            limited: location.pathname === AppRoute.Main,
          })}
        >
          <NavBlock />
          <LangBtn />
        </div>
      </div>
    </div>
  );
}

export default Menu;
