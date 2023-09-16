import './menu.scss';

import React, { useState } from 'react';

import LangBtn from './LangBtn/LangBtn';
import MenuBtn from './MenuBtn/MenuBtn';
import MenuStates from './MenuStates';
import NavBlock from './NavBlock/NavBlock';

export default function Menu() {
  const [state, setState] = useState<MenuStates>(MenuStates.Collapsed);

  const handleMenuBtnOnClick = () => {
    if (state === MenuStates.Collapsed) {
      setState(MenuStates.Expanded);
    } else {
      setState(MenuStates.Collapsed);
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
