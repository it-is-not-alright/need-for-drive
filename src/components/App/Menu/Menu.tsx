import './style.scss';

import classNames from 'classnames';
import React, { useState } from 'react';
import { useLocation } from 'react-router';

import { AppRoute } from '~/components/App/types';
import Icon from '~/components/common/Icon/Icon';

import LangButton from './LangButton/LangButton';
import MenuButton from './MenuButton/MenuButton';
import { MenuState } from './types';

function Menu() {
  const [state, setState] = useState<MenuState>(MenuState.Collapsed);
  const location = useLocation();

  const handleMenuButtonClick = () => {
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
        <MenuButton menuState={state} onClick={handleMenuButtonClick} />
        <LangButton />
      </div>
      <div id="menu__body">
        <div
          id="menu__body__content"
          className={classNames('fw-500 white-text', {
            limited: location.pathname === AppRoute.Main,
          })}
        >
          <span />
          <p>ПАРКОВКА</p>
          <span />
          <p>СТРАХОВКА</p>
          <span />
          <p>БЕНЗИН</p>
          <span />
          <p>ОБСЛУЖИВАНИЕ</p>
          <span />
          <div id="menu__body__content__btn-block">
            <button className="btn-icon" type="button">
              <Icon name="telegram" width={32} height={32} />
            </button>
            <button className="btn-icon" type="button">
              <Icon name="facebook" width={32} height={32} />
            </button>
            <button className="btn-icon" type="button">
              <Icon name="instagram" width={32} height={32} />
            </button>
          </div>
          <span />
          <LangButton />
        </div>
      </div>
    </div>
  );
}

export default Menu;
