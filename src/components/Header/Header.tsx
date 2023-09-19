import './style.scss';

import React from 'react';

import Icon from '../Icon/Icon';

function Header() {
  return (
    <header>
      <div id="header__logo">
        <p className="green-text">Need for drive</p>
      </div>
      <div id="header__location">
        <Icon name="location" width={18} height={20} />
        <p className="gray-text">Ульяновск</p>
      </div>
    </header>
  );
}

export default Header;
