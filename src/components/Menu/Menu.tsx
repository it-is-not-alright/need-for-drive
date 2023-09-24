import './style.scss';

import React, { useState } from 'react';

import LangBtn from './LangBtn/LangBtn';
import MenuBtn from './MenuBtn/MenuBtn';
import NavBlock from './NavBlock/NavBlock';
import MenuStates from './types';

function Menu() {
  const [state, setState] = useState<MenuStates>(MenuStates.Collapsed);

  const handleMenuBtnOnClick = () => {
    if (state === MenuStates.Collapsed) {
      setState(MenuStates.Expanded);
      document.documentElement.style.overflowY = 'hidden';
    } else {
      setState(MenuStates.Collapsed);
      document.documentElement.style.overflowY = 'auto';
    }
  };

  return (
    <div id="menu" className={state}>
      <div id="menu__sidebar">
        <MenuBtn menuState={state} onClick={handleMenuBtnOnClick} />
        <LangBtn />
      </div>
      <div id="menu__container">
        <div id="menu__container__content">
          <NavBlock />
          <LangBtn />
        </div>
      </div>
    </div>
  );
}

export default Menu;
